(function () {
  'use strict';

  const TOTAL_QUESTIONS = 30;

  // Estado del Cuestionario
  let allQuestions = [];
  let questions = [];
  let currentIndex = 0;
  let score = 0;

  // Elementos del DOM
  const quizCard = document.getElementById('quiz-card');
  const resultCard = document.getElementById('result-card');
  const qCounter = document.getElementById('q-counter');
  const scoreCounter = document.getElementById('score-counter');
  const progressFill = document.getElementById('progress-fill');
  const questionText = document.getElementById('question-text');
  const optionsList = document.getElementById('options-list');
  const explanationBox = document.getElementById('explanation-box');
  const btnNext = document.getElementById('btn-next');
  const finalScore = document.getElementById('final-score');
  const finalMsg = document.getElementById('final-msg');
  const btnRestart = document.getElementById('btn-restart');

  // Función para barajar opciones y preguntas (Fisher-Yates)
  function shuffle(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Cargar preguntas directamente desde preguntas.json
  async function loadQuestions() {
    try {
      const res = await fetch('./preguntas.json');
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      allQuestions = await res.json();
      startQuiz();
    } catch (err) {
      questionText.textContent = 'Error al cargar las preguntas desde preguntas.json.';
      console.error('Error:', err);
    }
  }

  // Iniciar o reiniciar cuestionario con 30 preguntas aleatorias
  function startQuiz() {
    currentIndex = 0;
    score = 0;
    questions = shuffle(allQuestions).slice(0, TOTAL_QUESTIONS);

    quizCard.style.display = 'block';
    resultCard.style.display = 'none';

    renderQuestion();
  }

  // Renderizar la pregunta actual
  function renderQuestion() {
    const q = questions[currentIndex];
    const total = questions.length;

    qCounter.textContent = `Pregunta ${currentIndex + 1} de ${total}`;
    scoreCounter.textContent = `Aciertos: ${score}`;
    progressFill.style.width = `${((currentIndex) / total) * 100}%`;

    questionText.textContent = q.pregunta;

    optionsList.innerHTML = '';
    explanationBox.style.display = 'none';
    explanationBox.innerHTML = '';
    btnNext.style.display = 'none';

    // Mezclar opciones de respuesta
    const shuffledOptions = shuffle(q.opciones);

    shuffledOptions.forEach((optionText) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.textContent = optionText;

      btn.addEventListener('click', () => handleSelectOption(btn, optionText, q));
      optionsList.appendChild(btn);
    });
  }

  // Manejar selección de opción
  function handleSelectOption(selectedBtn, selectedText, q) {
    const isCorrect = (selectedText === q.respuesta_correcta);
    const allOptionBtns = optionsList.querySelectorAll('.option-btn');

    // Deshabilitar botones para evitar selecciones múltiples
    allOptionBtns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      selectedBtn.classList.add('correct');
      score++;
      scoreCounter.textContent = `Aciertos: ${score}`;
    } else {
      selectedBtn.classList.add('incorrect');

      // Marcar la respuesta correcta en verde
      allOptionBtns.forEach(btn => {
        if (btn.textContent === q.respuesta_correcta) {
          btn.classList.add('correct');
        }
      });
    }

    // Mostrar justificación técnica
    explanationBox.innerHTML = `<strong>Justificación:</strong> ${q.explicacion}`;
    explanationBox.style.display = 'block';

    // Mostrar botón para avanzar
    btnNext.textContent = (currentIndex === questions.length - 1) ? 'Ver Resultados' : 'Siguiente Pregunta';
    btnNext.style.display = 'block';
  }

  // Siguiente pregunta o resultados
  function handleNextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  // Mostrar resultados finales
  function showResults() {
    quizCard.style.display = 'none';
    resultCard.style.display = 'block';

    const total = questions.length;
    finalScore.textContent = `${score} / ${total}`;

    const pct = Math.round((score / total) * 100);
    if (pct >= 85) {
      finalMsg.textContent = `¡Excelente! Obtuviste un ${pct}%. Tienes los conceptos dominados.`;
    } else if (pct >= 70) {
      finalMsg.textContent = `¡Buen trabajo! Aprobaste con un ${pct}%.`;
    } else {
      finalMsg.textContent = `Obtuviste un ${pct}%. Te recomendamos repasar e intentar de nuevo.`;
    }
  }

  btnNext.addEventListener('click', handleNextQuestion);
  btnRestart.addEventListener('click', startQuiz);

  loadQuestions();
})();
