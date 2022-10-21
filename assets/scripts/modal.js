'use strict'

{
  const openButton = document.getElementById('js-recordButton')
  const modal = document.getElementById('js-modal')
  const modalContainer = document.getElementById('js-modalContainer')
  const closeButton = document.getElementById('js-closeButton')
  const inputDay = document.getElementById('day')
  const calendar = document.getElementById('js-calendar')
  const modalRecord = document.getElementById('modalRecordButton')
  const backButton = document.getElementById('js-backButton')

  openButton.addEventListener('click', () => {
    modal.classList.add('openModal');
  });
  closeButton.addEventListener('click', () => {
    modal.classList.remove('openModal')
  });
  inputDay.addEventListener('click', () => {
    calendar.classList.add('openCalendar')
    modalContainer.classList.add('hide')
    // modal.classList.add('openCalendar')
  });
  modalRecord.addEventListener('click', () => {
    modalContainer.classList.add('hide')
    modal.classList.remove('openModal')
    
  });
  backButton.addEventListener('click', () => {
    calendar.classList.remove('openCalendar')
    modalContainer.classList.remove('hide')
  });
}