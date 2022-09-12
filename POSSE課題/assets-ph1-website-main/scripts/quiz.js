'use strict';

{
  const CORRECT_ANSWERS = [
    {
      index: 1,
      value: '約79万人',
    },
    {
      index: 2,
      value: 'X-TECH',
    },
    {
      index: 0,
      value: 'Internet of Things',
    },
    {
      index: 0,
      value: 'Society 5.0',
    },
    {
      index: 0,
      value: 'web3.0',
    },
    {
      index: 1,
      value: '約5倍',
    },
  ];

  const allQuiz = document.querySelectorAll('.js-quiz');

  function setDisabled(answers) {
    answers.forEach(answer => {
      answer.disabled = true;
    });
  }

  function setTitle(target, isCorrect) {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }

  function setClassName(target, isCorrect) {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }

  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answer_box');
    const answerTitle = quiz.querySelector('.js-answer_title');
    const answerText = quiz.querySelector('.js-answer_text');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        setDisabled(answers);

        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;

        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
}