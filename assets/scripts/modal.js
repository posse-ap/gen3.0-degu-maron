'use strict'

{
  const openButton = document.getElementById('js-recordButton')
  const modal = document.getElementById('js-modal')
  const closeButton = document.getElementById('js-closeButton')
  const inputDay = document.getElementById('day')
  const calendar = document.getElementById('js-calendar')

  openButton.addEventListener('click', () => {
    modal.classList.add('openModal');
  });
  closeButton.addEventListener('click', () => {
    modal.classList.remove('openModal')
  });
  inputDay.addEventListener('click', () => {
    calendar.classList.add('openCalendar')
    modal.classList.add('openCalendar')
  });

}