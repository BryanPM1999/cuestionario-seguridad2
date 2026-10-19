/**
 * ==============================================================================
 * CyberSec Exam Arena - Motor Interactivo del Parcial 2
 * Arquitectura Limpia (Clean Code) y Principio DRY (Don't Repeat Yourself)
 * ==============================================================================
 */

(function () {
  'use strict';

  // ----------------------------------------------------------------------------
  // CONSTANTES DE CONFIGURACIÓN
  // ----------------------------------------------------------------------------
  const CONFIG = Object.freeze({
    DEFAULT_EXAM_SIZE: 30,
    QUICK_EXAM_SIZE: 15,
    SECONDS_PER_QUESTION: 60,
    WARNING_TIME_THRESHOLD: 120, // 2 minutos para advertencia
    LETTERS: ['A', 'B', 'C', 'D'],
    CIRCUMFERENCE: 439.82, // 2 * π * 70 (radio del SVG de puntaje)
    KEY_MAP: {
      '1': 0, 'a': 0,
      '2': 1, 'b': 1,
      '3': 2, 'c': 2,
      '4': 3, 'd': 3
    }
  });

  // ----------------------------------------------------------------------------
  // SERVICIO DE AUDIO (Web Audio API nativo - Sin dependencias externas)
  // ----------------------------------------------------------------------------
  class AudioService {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    _initContext() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContextClass();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    _playTone(freq, type, duration, gainVal = 0.1, startTimeOffset = 0) {
      if (!this.enabled) return;
      this._initContext();
      if (!this.ctx) return;

      const startTime = this.ctx.currentTime + startTimeOffset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(gainVal, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.02);
    }

    playClick() {
      this._playTone(500, 'sine', 0.05, 0.08);
    }

    playCorrect() {
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        this._playTone(freq, 'triangle', 0.18, 0.12, idx * 0.07);
      });
    }

    playIncorrect() {
      [220, 196].forEach((freq, idx) => {
        this._playTone(freq, 'sawtooth', 0.22, 0.09, idx * 0.1);
      });
    }

    playFanfare() {
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        this._playTone(freq, 'sine', 0.35, 0.15, idx * 0.12);
      });
    }

    toggle() {
      this.enabled = !this.enabled;
      if (this.enabled) this.playClick();
      return this.enabled;
    }
  }

  // ----------------------------------------------------------------------------
  // MODELO DE NEGOCIO Y ESTADO (QuizModel)
  // ----------------------------------------------------------------------------
  class QuizModel {
    constructor() {
      this.bank = [];
      this.activeQuestions = [];
      this.answers = {}; // index: { selectedIndex, selectedText, isCorrect, flag }
      this.mode = 'exam30';
      this.settings = {
        immediateFeedback: false,
        shuffleQuestions: true,
        shuffleOptions: true,
        timerEnabled: true
      };
      this.reviewFilter = 'all';
    }

    static shuffleArray(array) {
      const copy = [...array];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    prepareQuestions(modeOverride = null) {
      const targetMode = modeOverride || this.mode;
      this.mode = targetMode;
      this.answers = {};

      let selectedPool = [];

      if (targetMode === 'failedOnly') {
        const failedIds = new Set(
          this.activeQuestions
            .filter((_, idx) => !this.answers[idx]?.isCorrect)
            .map(q => q.id)
        );
        selectedPool = this.bank.filter(q => failedIds.has(q.id));
      } else if (targetMode === 'quick15') {
        selectedPool = this.settings.shuffleQuestions
          ? QuizModel.shuffleArray(this.bank).slice(0, CONFIG.QUICK_EXAM_SIZE)
          : this.bank.slice(0, CONFIG.QUICK_EXAM_SIZE);
      } else if (targetMode === 'all60') {
        selectedPool = this.settings.shuffleQuestions
          ? QuizModel.shuffleArray(this.bank)
          : [...this.bank];
      } else {
        // default: exam30
        selectedPool = this.settings.shuffleQuestions
          ? QuizModel.shuffleArray(this.bank).slice(0, CONFIG.DEFAULT_EXAM_SIZE)
          : this.bank.slice(0, CONFIG.DEFAULT_EXAM_SIZE);
      }

      this.activeQuestions = selectedPool.map(q => ({
        ...q,
        shuffledOptions: this.settings.shuffleOptions
          ? QuizModel.shuffleArray(q.opciones)
          : [...q.opciones]
      }));

      return this.activeQuestions;
    }

    recordAnswer(questionIndex, optionIndex) {
      const question = this.activeQuestions[questionIndex];
      if (!question) return null;

      const selectedText = question.shuffledOptions[optionIndex];
      const isCorrect = (selectedText === question.respuesta_correcta);
      const existingFlag = this.answers[questionIndex]?.flag || false;

      this.answers[questionIndex] = {
        selectedIndex: optionIndex,
        selectedText,
        isCorrect,
        flag: existingFlag
      };

      return { isCorrect, correctAnswer: question.respuesta_correcta, explanation: question.explicacion };
    }

    toggleFlag(questionIndex) {
      if (!this.answers[questionIndex]) {
        this.answers[questionIndex] = { flag: true };
      } else {
        this.answers[questionIndex].flag = !this.answers[questionIndex].flag;
      }
      return this.answers[questionIndex].flag;
    }

    getUnansweredCount() {
      return this.activeQuestions.filter((_, idx) => this.answers[idx]?.selectedIndex === undefined).length;
    }

    calculateMetrics(timeRemaining, totalSeconds) {
      const total = this.activeQuestions.length;
      let correct = 0;
      let incorrect = 0;
      let skipped = 0;
      const categoryMap = {};

      this.activeQuestions.forEach((q, idx) => {
        const cat = q.categoria || 'General';
        if (!categoryMap[cat]) categoryMap[cat] = { total: 0, correct: 0 };
        categoryMap[cat].total++;

        const ans = this.answers[idx];
        if (!ans || ans.selectedIndex === undefined) {
          skipped++;
        } else if (ans.isCorrect) {
          correct++;
          categoryMap[cat].correct++;
        } else {
          incorrect++;
        }
      });

      const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
      const timeSpent = Math.max(0, totalSeconds - timeRemaining);

      return { total, correct, incorrect, skipped, percentage, timeSpent, categoryMap };
    }
  }

  // ----------------------------------------------------------------------------
  // CONTROLADOR DE INTERFAZ DE USUARIO (QuizUI)
  // ----------------------------------------------------------------------------
  class QuizUI {
    constructor() {
      this.dom = {
        // Pantallas
        screenSetup: document.getElementById('screen-setup'),
        screenQuiz: document.getElementById('screen-quiz'),
        screenResults: document.getElementById('screen-results'),
        loadingState: document.getElementById('loading-state'),
        loadingTitle: document.getElementById('loading-title'),
        loadingDesc: document.getElementById('loading-desc'),

        // Configuración
        btnStart: document.getElementById('btn-start-quiz'),
        modeOptions: document.querySelectorAll('.mode-option'),
        chkImmediate: document.getElementById('chk-immediate-feedback'),
        chkShuffleQ: document.getElementById('chk-shuffle-questions'),
        chkShuffleOpt: document.getElementById('chk-shuffle-options'),
        chkTimer: document.getElementById('chk-timer'),
        totalAvailableBadge: document.getElementById('total-available-badge'),
        btnSoundToggle: document.getElementById('btn-sound-toggle'),

        // Examen Activo
        currentQNum: document.getElementById('current-q-num'),
        totalQNum: document.getElementById('total-q-num'),
        categoryTag: document.getElementById('category-tag'),
        timerBox: document.getElementById('timer-box'),
        timerText: document.getElementById('timer-text'),
        btnFlag: document.getElementById('btn-flag'),
        progressBar: document.getElementById('progress-bar'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        feedbackBox: document.getElementById('feedback-box'),
        feedbackHeader: document.getElementById('feedback-header'),
        feedbackExpl: document.getElementById('feedback-explanation'),
        btnPrev: document.getElementById('btn-prev'),
        btnNext: document.getElementById('btn-next'),
        btnFinish: document.getElementById('btn-finish'),
        paletteGrid: document.getElementById('palette-grid'),

        // Resultados
        scoreNumber: document.getElementById('score-number'),
        scorePct: document.getElementById('score-pct'),
        scoreBadge: document.getElementById('score-badge'),
        resultsHeadline: document.getElementById('results-headline'),
        resultsSub: document.getElementById('results-sub'),
        scoreCircleFill: document.getElementById('score-circle-fill'),
        valCorrect: document.getElementById('val-correct'),
        valIncorrect: document.getElementById('val-incorrect'),
        valSkipped: document.getElementById('val-skipped'),
        valTime: document.getElementById('val-time'),
        categoryBarsContainer: document.getElementById('category-bars-container'),
        reviewList: document.getElementById('review-list'),
        reviewFilterPills: document.querySelectorAll('.filter-pill'),
        btnRetestFailed: document.getElementById('btn-retest-failed'),
        btnRestartExam: document.getElementById('btn-restart-exam'),
        btnPrintResults: document.getElementById('btn-print-results'),
        btnShareScore: document.getElementById('btn-share-score'),

        // Modal
        modalFinish: document.getElementById('modal-finish'),
        modalUnansweredCount: document.getElementById('modal-unanswered-count'),
        modalBtnConfirm: document.getElementById('modal-btn-confirm'),
        modalBtnCancel: document.getElementById('modal-btn-cancel')
      };
    }

    switchScreen(screenName) {
      const screens = [this.dom.screenSetup, this.dom.screenQuiz, this.dom.screenResults];
      screens.forEach(s => s.classList.remove('active'));

      if (screenName === 'setup') this.dom.screenSetup.classList.add('active');
      else if (screenName === 'quiz') this.dom.screenQuiz.classList.add('active');
      else if (screenName === 'results') this.dom.screenResults.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showLoading(show, title = '', desc = '') {
      if (show) {
        this.dom.loadingTitle.textContent = title;
        this.dom.loadingDesc.textContent = desc;
        this.dom.loadingState.style.display = 'block';
      } else {
        this.dom.loadingState.style.display = 'none';
      }
    }

    static formatSeconds(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    updateTimer(secondsRemaining) {
      this.dom.timerText.textContent = QuizUI.formatSeconds(secondsRemaining);
      this.dom.timerBox.classList.toggle('warning', secondsRemaining <= CONFIG.WARNING_TIME_THRESHOLD && secondsRemaining > 0);
    }

    renderQuestion(index, question, savedAnswer, totalCount, isImmediateFeedback) {
      this.dom.currentQNum.textContent = index + 1;
      this.dom.totalQNum.textContent = totalCount;
      this.dom.categoryTag.textContent = question.categoria || 'Seguridad Informática';

      // Barra de progreso
      const progressPercent = ((index + 1) / totalCount) * 100;
      this.dom.progressBar.style.width = `${progressPercent}%`;

      // Estado del botón marcar
      this.updateFlagButton(Boolean(savedAnswer?.flag));

      // Texto de la pregunta
      this.dom.questionText.textContent = question.pregunta;

      // Renderizado de opciones
      this.dom.optionsContainer.innerHTML = '';
      question.shuffledOptions.forEach((optText, optIdx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.dataset.index = optIdx;

        const badge = document.createElement('div');
        badge.className = 'option-badge';
        badge.textContent = CONFIG.LETTERS[optIdx] || optIdx + 1;

        const text = document.createElement('div');
        text.className = 'option-text';
        text.textContent = optText;

        card.appendChild(badge);
        card.appendChild(text);

        if (savedAnswer) {
          if (savedAnswer.selectedIndex === optIdx) card.classList.add('selected');
          if (isImmediateFeedback) {
            if (optText === question.respuesta_correcta) card.classList.add('correct');
            else if (savedAnswer.selectedIndex === optIdx) card.classList.add('incorrect');
            else card.classList.add('dimmed');
          }
        }

        this.dom.optionsContainer.appendChild(card);
      });

      // Feedback inmediato
      if (isImmediateFeedback && savedAnswer) {
        this.renderFeedbackBox(savedAnswer.isCorrect, question.respuesta_correcta, question.explicacion);
      } else {
        this.dom.feedbackBox.classList.remove('active');
      }

      // Botones de navegación
      this.dom.btnPrev.disabled = (index === 0);
      const isLast = (index === totalCount - 1);
      this.dom.btnNext.style.display = isLast ? 'none' : 'inline-flex';
      this.dom.btnFinish.style.display = isLast ? 'inline-flex' : 'none';

      this.highlightPaletteCurrent(index);
    }

    updateFlagButton(isFlagged) {
      this.dom.btnFlag.classList.toggle('flagged', isFlagged);
      this.dom.btnFlag.innerHTML = isFlagged
        ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v19"/></svg> Marcada`
        : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v19"/></svg> Marcar`;
    }

    renderFeedbackBox(isCorrect, correctAnswer, explanation) {
      this.dom.feedbackBox.classList.remove('is-correct', 'is-incorrect');
      this.dom.feedbackHeader.classList.remove('correct', 'incorrect');

      if (isCorrect) {
        this.dom.feedbackBox.classList.add('is-correct', 'active');
        this.dom.feedbackHeader.classList.add('correct');
        this.dom.feedbackHeader.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          ¡Respuesta Correcta!
        `;
      } else {
        this.dom.feedbackBox.classList.add('is-incorrect', 'active');
        this.dom.feedbackHeader.classList.add('incorrect');
        this.dom.feedbackHeader.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Respuesta Incorrecta
        `;
      }

      this.dom.feedbackExpl.innerHTML = `
        <p style="margin-bottom: 0.5rem;"><strong>Respuesta correcta:</strong> ${correctAnswer}</p>
        <p><strong>Justificación:</strong> ${explanation}</p>
      `;
    }

    renderPalette(count) {
      this.dom.paletteGrid.innerHTML = '';
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < count; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'palette-btn';
        btn.textContent = i + 1;
        btn.dataset.index = i;
        fragment.appendChild(btn);
      }
      this.dom.paletteGrid.appendChild(fragment);
    }

    highlightPaletteCurrent(currentIndex) {
      const btns = this.dom.paletteGrid.children;
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('current', i === currentIndex);
      }
    }

    updatePaletteStatus(index, answer) {
      const btn = this.dom.paletteGrid.children[index];
      if (!btn) return;
      btn.classList.toggle('answered', answer && answer.selectedIndex !== undefined);
      btn.classList.toggle('flagged', Boolean(answer?.flag));
    }

    renderResults(metrics, questions, answers, filter) {
      const { total, correct, incorrect, skipped, percentage, timeSpent, categoryMap } = metrics;

      this.dom.scoreNumber.textContent = `${correct}/${total}`;
      this.dom.scorePct.textContent = `${percentage}%`;

      // Círculo SVG animado
      const offset = CONFIG.CIRCUMFERENCE - (percentage / 100) * CONFIG.CIRCUMFERENCE;
      this.dom.scoreCircleFill.style.strokeDashoffset = offset;

      if (percentage >= 85) {
        this.dom.scoreBadge.className = 'score-badge passed';
        this.dom.scoreBadge.innerHTML = '🏆 Nivel Sobresaliente';
        this.dom.resultsHeadline.textContent = '¡Dominio Técnico Total!';
        this.dom.resultsSub.textContent = 'Estás completamente preparado para el Parcial 2 de Seguridad Informática.';
        this.dom.scoreCircleFill.style.stroke = '#10b981';
      } else if (percentage >= 70) {
        this.dom.scoreBadge.className = 'score-badge passed';
        this.dom.scoreBadge.innerHTML = '✅ Aprobado';
        this.dom.resultsHeadline.textContent = '¡Buen Desempeño!';
        this.dom.resultsSub.textContent = 'Aprobaste con base sólida. Revisa los detalles para perfeccionar conceptos.';
        this.dom.scoreCircleFill.style.stroke = '#00f0ff';
      } else {
        this.dom.scoreBadge.className = 'score-badge failed';
        this.dom.scoreBadge.innerHTML = '⚠️ Requiere Repaso';
        this.dom.resultsHeadline.textContent = 'Necesitas Fortalecer Conceptos';
        this.dom.resultsSub.textContent = 'Utiliza la revisión y explicaciones técnicas para dominar las áreas débiles.';
        this.dom.scoreCircleFill.style.stroke = '#ef4444';
      }

      this.dom.valCorrect.textContent = correct;
      this.dom.valIncorrect.textContent = incorrect;
      this.dom.valSkipped.textContent = skipped;
      this.dom.valTime.textContent = QuizUI.formatSeconds(timeSpent);
      this.dom.btnRetestFailed.style.display = (incorrect + skipped > 0) ? 'inline-flex' : 'none';

      // Desglose por categorías
      this.dom.categoryBarsContainer.innerHTML = '';
      Object.keys(categoryMap).sort().forEach(cat => {
        const item = categoryMap[cat];
        const catPct = Math.round((item.correct / item.total) * 100);

        const row = document.createElement('div');
        row.className = 'cat-bar-item';
        row.innerHTML = `
          <div class="cat-bar-header">
            <span class="cat-name">${cat}</span>
            <span class="cat-stats">${item.correct}/${item.total} (${catPct}%)</span>
          </div>
          <div class="cat-track">
            <div class="cat-fill" style="width: ${catPct}%; background: ${catPct >= 70 ? 'linear-gradient(90deg, #10b981, #00f0ff)' : 'linear-gradient(90deg, #ef4444, #f59e0b)'}"></div>
          </div>
        `;
        this.dom.categoryBarsContainer.appendChild(row);
      });

      this.renderReviewList(questions, answers, filter);
    }

    renderReviewList(questions, answers, filter) {
      this.dom.reviewList.innerHTML = '';
      const fragment = document.createDocumentFragment();

      questions.forEach((q, idx) => {
        const ans = answers[idx];
        const isAnswered = (ans && ans.selectedIndex !== undefined);
        const isCorrect = (isAnswered && ans.isCorrect);
        const isSkipped = !isAnswered;
        const isFlagged = Boolean(ans?.flag);

        if (filter === 'correct' && !isCorrect) return;
        if (filter === 'incorrect' && (isCorrect || isSkipped)) return;
        if (filter === 'skipped' && !isSkipped) return;
        if (filter === 'flagged' && !isFlagged) return;

        let statusClass = 'is-correct';
        let badgeHtml = '<span class="review-status-badge correct">Correcta</span>';

        if (isSkipped) {
          statusClass = 'is-skipped';
          badgeHtml = '<span class="review-status-badge skipped">Omitida</span>';
        } else if (!isCorrect) {
          statusClass = 'is-incorrect';
          badgeHtml = '<span class="review-status-badge incorrect">Incorrecta</span>';
        }

        const card = document.createElement('div');
        card.className = `review-card ${statusClass}`;
        card.innerHTML = `
          <div class="review-card-top">
            <span class="review-q-num">Reactivo ${idx + 1} &bull; ${q.categoria}</span>
            ${badgeHtml}
          </div>
          <h4 class="review-q-title">${q.pregunta}</h4>
          <div class="review-answers-box">
            ${!isCorrect && isAnswered ? `
              <div class="review-ans-row user-wrong">
                <strong>Tu selección:</strong> ${ans.selectedText}
              </div>
            ` : ''}
            <div class="review-ans-row correct-ans">
              <strong>Respuesta oficial:</strong> ${q.respuesta_correcta}
            </div>
          </div>
          <div class="review-expl">
            <strong>Justificación técnica:</strong> ${q.explicacion}
          </div>
        `;
        fragment.appendChild(card);
      });

      if (fragment.children.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.style.cssText = 'text-align: center; padding: 2.5rem; color: var(--text-muted);';
        emptyMsg.textContent = 'No existen reactivos para el filtro seleccionado.';
        fragment.appendChild(emptyMsg);
      }

      this.dom.reviewList.appendChild(fragment);
    }
  }

  // ----------------------------------------------------------------------------
  // ORQUESTADOR DE LA APLICACIÓN (QuizApp)
  // ----------------------------------------------------------------------------
  class QuizApp {
    constructor() {
      this.model = new QuizModel();
      this.ui = new QuizUI();
      this.audio = new AudioService();

      this.currentIndex = 0;
      this.timerInterval = null;
      this.totalSeconds = 0;
      this.secondsRemaining = 0;
    }

    async init() {
      this._bindEvents();
      this._setupKeyboardNavigation();
      await this._fetchQuestionBank();
    }

    async _fetchQuestionBank() {
      this.ui.showLoading(true, "Cargando reactivos de evaluación...", "Consultando preguntas.json");
      try {
        const res = await fetch('preguntas.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("El archivo preguntas.json no contiene un arreglo válido.");
        }

        this.model.bank = data;
        this.ui.dom.totalAvailableBadge.textContent = data.length;
        this.ui.showLoading(false);
      } catch (err) {
        console.error("Error cargando preguntas.json:", err);
        this.ui.showLoading(
          true,
          "No se pudo cargar preguntas.json",
          "Asegúrate de ejecutar la aplicación mediante un servidor local (ej. npm start o Abrir-Cuestionario.bat) para permitir la lectura del archivo JSON."
        );
      }
    }

    _startQuizSession(modeOverride = null) {
      this.audio.playClick();
      const questions = this.model.prepareQuestions(modeOverride);

      if (questions.length === 0) {
        alert("No hay preguntas disponibles para el modo seleccionado.");
        return;
      }

      this.currentIndex = 0;
      this.totalSeconds = questions.length * CONFIG.SECONDS_PER_QUESTION;
      this.secondsRemaining = this.totalSeconds;

      this.ui.renderPalette(questions.length);
      this._showCurrentQuestion();
      this._startTimer();
      this.ui.switchScreen('quiz');
    }

    _startTimer() {
      clearInterval(this.timerInterval);
      if (!this.model.settings.timerEnabled) {
        this.ui.dom.timerBox.style.display = 'none';
        return;
      }

      this.ui.dom.timerBox.style.display = 'flex';
      this.ui.updateTimer(this.secondsRemaining);

      this.timerInterval = setInterval(() => {
        this.secondsRemaining--;
        this.ui.updateTimer(this.secondsRemaining);

        if (this.secondsRemaining <= 0) {
          clearInterval(this.timerInterval);
          alert("¡Tiempo concluido! El examen se finalizará automáticamente.");
          this._finishQuizSession();
        }
      }, 1000);
    }

    _showCurrentQuestion() {
      const q = this.model.activeQuestions[this.currentIndex];
      const savedAns = this.model.answers[this.currentIndex];
      this.ui.renderQuestion(
        this.currentIndex,
        q,
        savedAns,
        this.model.activeQuestions.length,
        this.model.settings.immediateFeedback
      );
    }

    _onOptionSelected(optIndex) {
      const result = this.model.recordAnswer(this.currentIndex, optIndex);
      if (!result) return;

      if (this.model.settings.immediateFeedback) {
        if (result.isCorrect) this.audio.playCorrect();
        else this.audio.playIncorrect();
      } else {
        this.audio.playClick();
      }

      this._showCurrentQuestion();
      this.ui.updatePaletteStatus(this.currentIndex, this.model.answers[this.currentIndex]);
    }

    _toggleFlag() {
      this.audio.playClick();
      const isFlagged = this.model.toggleFlag(this.currentIndex);
      this.ui.updateFlagButton(isFlagged);
      this.ui.updatePaletteStatus(this.currentIndex, this.model.answers[this.currentIndex]);
    }

    _requestFinish() {
      this.audio.playClick();
      const unanswered = this.model.getUnansweredCount();
      if (unanswered > 0) {
        this.ui.dom.modalUnansweredCount.textContent = unanswered;
        this.ui.dom.modalFinish.classList.add('active');
      } else {
        this._finishQuizSession();
      }
    }

    _finishQuizSession() {
      clearInterval(this.timerInterval);
      this.ui.dom.modalFinish.classList.remove('active');

      const metrics = this.model.calculateMetrics(this.secondsRemaining, this.totalSeconds);
      if (metrics.percentage >= 70) this.audio.playFanfare();
      else this.audio.playIncorrect();

      this.ui.renderResults(metrics, this.model.activeQuestions, this.model.answers, this.model.reviewFilter);
      this.ui.switchScreen('results');
    }

    _copySummary() {
      const { correct, total, percentage } = this.model.calculateMetrics(this.secondsRemaining, this.totalSeconds);
      const text = `🛡️ Resultado Parcial 2 - Seguridad Informática\n` +
                   `Puntaje: ${correct}/${total} (${percentage}%)\n` +
                   `Modo: ${this.model.mode}\n` +
                   `Evaluación completada en el simulador interactivo.`;

      navigator.clipboard.writeText(text)
        .then(() => alert("¡Resumen copiado al portapapeles con éxito!"))
        .catch(() => alert(text));
    }

    _bindEvents() {
      const { dom } = this.ui;

      // Selección de modo
      dom.modeOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          this.audio.playClick();
          dom.modeOptions.forEach(o => o.classList.remove('active'));
          opt.classList.add('active');
          this.model.mode = opt.dataset.mode;
        });
      });

      // Switches
      dom.chkImmediate.addEventListener('change', e => { this.model.settings.immediateFeedback = e.target.checked; });
      dom.chkShuffleQ.addEventListener('change', e => { this.model.settings.shuffleQuestions = e.target.checked; });
      dom.chkShuffleOpt.addEventListener('change', e => { this.model.settings.shuffleOptions = e.target.checked; });
      dom.chkTimer.addEventListener('change', e => { this.model.settings.timerEnabled = e.target.checked; });

      // Sonido
      dom.btnSoundToggle.addEventListener('click', () => {
        const isEnabled = this.audio.toggle();
        dom.btnSoundToggle.style.color = isEnabled ? 'var(--primary)' : 'var(--text-dim)';
        dom.btnSoundToggle.title = isEnabled ? "Sonido: Activado" : "Sonido: Silenciado";
      });

      // Iniciar
      dom.btnStart.addEventListener('click', () => this._startQuizSession());

      // Delegación de clics en opciones
      dom.optionsContainer.addEventListener('click', e => {
        const card = e.target.closest('.option-card');
        if (!card) return;
        const optIdx = parseInt(card.dataset.index, 10);
        this._onOptionSelected(optIdx);
      });

      // Navegación
      dom.btnPrev.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.audio.playClick();
          this.currentIndex--;
          this._showCurrentQuestion();
        }
      });

      dom.btnNext.addEventListener('click', () => {
        if (this.currentIndex < this.model.activeQuestions.length - 1) {
          this.audio.playClick();
          this.currentIndex++;
          this._showCurrentQuestion();
        }
      });

      dom.btnFinish.addEventListener('click', () => this._requestFinish());
      dom.btnFlag.addEventListener('click', () => this._toggleFlag());

      // Mapa de reactivos (delegación de eventos)
      dom.paletteGrid.addEventListener('click', e => {
        const btn = e.target.closest('.palette-btn');
        if (!btn) return;
        this.audio.playClick();
        this.currentIndex = parseInt(btn.dataset.index, 10);
        this._showCurrentQuestion();
      });

      // Modal
      dom.modalBtnCancel.addEventListener('click', () => {
        this.audio.playClick();
        dom.modalFinish.classList.remove('active');
      });
      dom.modalBtnConfirm.addEventListener('click', () => this._finishQuizSession());

      // Acciones de resultados
      dom.btnRestartExam.addEventListener('click', () => {
        this.audio.playClick();
        this.ui.switchScreen('setup');
      });

      dom.btnRetestFailed.addEventListener('click', () => this._startQuizSession('failedOnly'));
      dom.btnPrintResults.addEventListener('click', () => window.print());
      dom.btnShareScore.addEventListener('click', () => this._copySummary());

      // Filtros de revisión
      dom.reviewFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          this.audio.playClick();
          dom.reviewFilterPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.model.reviewFilter = pill.dataset.filter;
          this.ui.renderReviewList(this.model.activeQuestions, this.model.answers, this.model.reviewFilter);
        });
      });
    }

    _setupKeyboardNavigation() {
      window.addEventListener('keydown', e => {
        // Modal activo
        if (this.ui.dom.modalFinish.classList.contains('active')) {
          if (e.key === 'Escape') this.ui.dom.modalFinish.classList.remove('active');
          if (e.key === 'Enter') this._finishQuizSession();
          return;
        }

        // Solo en pantalla de examen
        if (!this.ui.dom.screenQuiz.classList.contains('active')) return;

        const key = e.key.toLowerCase();

        // Opciones 1-4 o A-D
        if (CONFIG.KEY_MAP[key] !== undefined) {
          const optIdx = CONFIG.KEY_MAP[key];
          const q = this.model.activeQuestions[this.currentIndex];
          if (q && q.shuffledOptions[optIdx] !== undefined) {
            this._onOptionSelected(optIdx);
          }
          return;
        }

        // Flechas / Enter
        if (key === 'arrowright' || (key === 'enter' && !e.shiftKey)) {
          if (this.currentIndex < this.model.activeQuestions.length - 1) {
            this.audio.playClick();
            this.currentIndex++;
            this._showCurrentQuestion();
          } else {
            this._requestFinish();
          }
        } else if (key === 'arrowleft') {
          if (this.currentIndex > 0) {
            this.audio.playClick();
            this.currentIndex--;
            this._showCurrentQuestion();
          }
        } else if (key === 'f') {
          this._toggleFlag();
        }
      });
    }
  }

  // ----------------------------------------------------------------------------
  // INICIALIZACIÓN
  // ----------------------------------------------------------------------------
  const app = new QuizApp();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
  } else {
    app.init();
  }
})();
