'use strict'

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDate();

  // 前月分の日付の取得
  function getCalendarHead(){
    const dates = [];
    const finalDay = new Date(year, month, 0).getDate();  // 前月末の日付取得
    const previous = new Date(year, month, 1).getDay();  // 月初の曜日の数値=前月分の表示個数

    for (let i = 0; i < previous; i++){
      dates.unshift({    // 先頭に追加していく
        date: finalDay - i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  // 今月分の日付の取得
  function getCalendarBody(){
    const dates = []; // date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for(let i = 1; i <= lastDate; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    // 今日に装飾つける
    if (year === today.getFullYear() && month === today.getMonth()){
      dates[today.getDate() - 1].isToday = true;
    }
    
    // 昨日まではdisabledにする
    if (year === today.getFullYear() && month === today.getMonth()){
      for (let i = 1; i < dates[today.getDate() - 1].date; i++){
        dates[today.getDate() - (i + 1)].isDisabled = true;
      }
    }

    return dates;
  }

  // 翌月分の日付の取得
  function getCalendarTail(){
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();  // 末日が週の何日目か

    for (let i = 1; i < 7 - lastDay; i++){
      dates.push({    // 末尾に追加していく
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    return dates;
  }

  // 月移動した時のためにいったん消す
  function clearCalendar(){
    const tbody = document.querySelector('tbody');

    while (tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }
  }

  // 年月の表示
  function renderTitle(){
    const title = `${year}年${month + 1}月`;
    document.getElementById('title').textContent = title;
  }

  // 日付部分
  function renderWeeks(){
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),    // スプレッド構文使う。そのままだと配列in配列になる
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++){
      weeks.push(dates.splice(0,7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td =document.createElement('td');

        td.textContent = date.date;
        if (date.isToday){
          td.classList.add('today');
        }
        if (date.isDisabled){
          td.classList.add('disabled');
        }   // 今月分
        tr.appendChild(td);   // tr要素の子要素の末尾に追加していく
      });
      document.querySelector('tbody').appendChild(tr);
    });
  }

  // カレンダーの描画
  function createCalendar(){
    clearCalendar();
    renderTitle();
    renderWeeks();   
  }

  // <クリックで前月に移動
  document.getElementById('prev').addEventListener('click', () => {
    month--;
    if (month < 0){    // 月は0から始まることに注意
      year--;
      month = 11;
    }

    createCalendar();
  });

  // >クリックで翌月に移動
  document.getElementById('next').addEventListener('click', () => {
    month++;
    if (month > 11){
      year++;
      month = 0;
    }

    createCalendar();
  });

  // 決定ボタンでインプットに入力＆画面戻る
  function setDay (){
    return `${year}年${month + 1}月${day}日`
  }

  const modalContainer = document.getElementById('js-modalContainer')
  const calendar = document.getElementById('js-calendar')
  const decideButton =document.getElementById('calendarButton');
  const inputDay = document.getElementById('day');

  decideButton.addEventListener('click', () => {
    inputDay.value = setDay()
    calendar.classList.remove('openCalendar')
    modalContainer.classList.remove('hide')
  });
  // 今日の日付は入れられた

  createCalendar();
}