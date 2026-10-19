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

  // Función para mezclar arreglos (Fisher-Yates)
  function shuffle(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Cargar preguntas (soporta window.PREGUNTAS para file:// y fetch para web)
  async function loadQuestions() {
    if (window.PREGUNTAS && Array.isArray(window.PREGUNTAS) && window.PREGUNTAS.length > 0) {
      allQuestions = window.PREGUNTAS;
      startQuiz();
      return;
    }

    try {
      const res = await fetch('preguntas.json');
      allQuestions = await res.json();
      startQuiz();
    } catch (err) {
      questionText.textContent = 'Error al cargar las preguntas.';
      console.error('Error cargando preguntas:', err);
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

    // Actualizar contadores y progreso
    qCounter.textContent = `Pregunta ${currentIndex + 1} de ${total}`;
    scoreCounter.textContent = `Aciertos: ${score}`;
    progressFill.style.width = `${((currentIndex) / total) * 100}%`;

    // Texto de la pregunta
    questionText.textContent = q.pregunta;

    // Limpiar opciones anteriores y ocultar explicación y botón
    optionsList.innerHTML = '';
    explanationBox.style.display = 'none';
    explanationBox.innerHTML = '';
    btnNext.style.display = 'none';

    // Mezclar y renderizar opciones
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

    // Deshabilitar todos los botones para evitar doble clic
    allOptionBtns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      // Verde si está correcta
      selectedBtn.classList.add('correct');
      score++;
      scoreCounter.textContent = `Aciertos: ${score}`;
    } else {
      // Rojo si está incorrecta
      selectedBtn.classList.add('incorrect');

      // Marcar la respuesta correcta en verde para que el usuario aprenda
      allOptionBtns.forEach(btn => {
        if (btn.textContent === q.respuesta_correcta) {
          btn.classList.add('correct');
        }
      });
    }

    // Mostrar explicación técnica
    explanationBox.innerHTML = `<strong>Justificación:</strong> ${q.explicacion}`;
    explanationBox.style.display = 'block';

    // Mostrar botón siguiente
    btnNext.textContent = (currentIndex === questions.length - 1) ? 'Ver Resultados' : 'Siguiente Pregunta';
    btnNext.style.display = 'block';
  }

  // Avanzar a la siguiente pregunta o mostrar resultados
  function handleNextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  // Pantalla de resultados
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
      finalMsg.textContent = `Obtuviste un ${pct}%. Te recomendamos repasar los conceptos e intentar de nuevo.`;
    }
  }

  // Event Listeners
  btnNext.addEventListener('click', handleNextQuestion);
  btnRestart.addEventListener('click', startQuiz);

  // Inicializar
  loadQuestions();
})();
