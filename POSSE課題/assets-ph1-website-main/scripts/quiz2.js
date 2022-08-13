'use strict';

{
  const ALL_QUIZ = [
    {
      id: 1,
      question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
      answers: ['約28万人', '約79万人', '約183万人'],
      correctNumber: 1,
      note: '経済産業省2019年3月 - IT人材需給に関する調査'
    },
    {
      id: 2,
      question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
      answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
      correctNumber: 2,
    },
    {
      id: 3,
      question: 'IoTとは何の略でしょう？',
      answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
      correctNumber: 0,
    },
    {
      id: 4,
      question: '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
      answers: ['Society 5.0', 'Cyphy', 'SDGs'], 
      correctNumber: 0,
      note: 'Society5.0 - 科学技術政策 - 内閣府',
    },
    {
      id: 5,
      question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
      answers: ['web3.0', 'NFT', 'メタバース'],
      correctNumber: 0,
    },
    {
      id:6,
      question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
      answers: ['約2倍', '約5倍', '約11倍'],
      correctNumber: 1,
      note: 'Accenture Technology Vision 2021'
    }
  ]

  //クイズコンテナーの取得
  const quizContainer = document.getElementById('js-quizContainer');

  //HTML作成する関数
  function quizHtml(quizItem, questionNumber) {

    //回答
    const answersHtml = quizItem.answers.map((answer, answerIndex) => `<li class="quiz-box_answer_itme">
        <button class="quiz-box_answer_button js-answer" data-answer='${answerIndex}'>
        ${answer}<i class="icon_arrow"></i>
        </button>
      </li>`
    ).join('');

    //引用部分
    const noteHTML = quizItem.note ? `<blockquote class="quiz-box_note">
      <img src="../assets-ph1-website-main/img/icon/icon-note.svg" class="icon_note">
      ${quizItem.note}
    </blockquote>` : '';

    return `<section class="quiz-box js-quiz" data-quiz="${questionNumber}">
      <div class="quiz-box_question">
        <h2 class="quiz-box_question_title">
          <span class="quiz-box_label">Q${questionNumber + 1}</span>
          <span class="quiz-box_question_title_text">${quizItem.question}</span>
        </h2>
        <figure class="quiz-box_question_image">
          <img src="../assets-ph1-website-main/img/quiz/img-quiz0${quizItem.id}.png">
        </figure>
      </div>
      <div class="quiz-box_answer">
        <span class="quiz-box_label quiz-box_label--accent">A</span>
        <ul class="quiz-box_answer_list">
          ${answersHtml}
        </ul>
        <div class="quiz-box_answer_correct js-answer_box">
          <p class="quiz-box_answer_correct_title js-answer_title"></p>
          <p class="quiz-box_answer_correct_content">
            <span class="quiz-box_answer_correct_content_label">A</span>
            <span class="js-answer_text"></span>
          </p>
        </div>
      </div>
      ${noteHTML}
    <section>`
  }

  //シャッフル機能
  function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }
  //並び変えたクイズ
  const quizArray = shuffle(ALL_QUIZ)

  quizContainer.innerHTML = quizArray.map((quizItem, index) => {
    return quizHtml(quizItem, index)
  }).join('')

  //問題を取得
  const allQuiz = document.querySelectorAll('.js-quiz');

  //buttonタグにdisabledを付ける
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  //正誤の表示
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }

  //クラス名つける
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect')
  }

  //各問題中の処理
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

        //ボタン選択できないように
        setDisabled(answers);

        //true or falseをcheckCorrectに入れる
        const correctNumber = quizArray[selectedQuiz].correctNuumber
        const isCorrect = correctNumber === selectedAnswer;

        //回答欄にテキストとクラス名つける
        answerText.innerText = quizArray[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
}