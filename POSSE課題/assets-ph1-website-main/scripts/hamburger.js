'use strict'
{
  const hamburger = document.getElementById('js-hamburger')
  const hamburgerBar1 = document.getElementById('js-hamburgerBar1')
  const hamburgerBar2 = document.getElementById('js-hamburgerBar2')
  const menu = document.getElementById('js-menu')
  const main = document.querySelector('main')
  const lineSection = document.getElementById('js-lineSection')
  const footer = document.getElementById('js-footer')
  const footerLine = document.getElementById('js-footerLine')
  const footerLineLink = document.getElementById('js-footerLineLink')
  const footerLogo = document.getElementById('js-footerLogo')
  const copyRight = document.getElementById('js-copyRight')

  const activeList = [hamburgerBar1, hamburgerBar2, menu]
  const hideList = [main, lineSection, footerLogo, copyRight]
  const changeList = [footer, footerLine, footerLineLink]

  function setActive(target) {
    target.classList.toggle('is-active');
  }
  function setHide(target) {
    target.classList.toggle('hide');
  }
  function setChanged(target) {
    target.classList.toggle('is-changed')
  }

  hamburger.addEventListener('click', () =>{
    activeList.forEach(target => {
      setActive(target);
    });
    hideList.forEach(target => {
      setHide(target);
    });
    changeList.forEach(target => {
      setChanged(target)
    })
  })
}

// TO DO 
// ・見た目崩れないように(top, quiz)
