'use strict'
{
  const hamburger = document.getElementById('js-hamburger')
  const hamburgerBar1 = document.getElementById('js-hamburgerBar1')
  const hamburgerBar2 = document.getElementById('js-hamburgerBar2')
  const menu = document.getElementById('js-menu')
  hamburger.addEventListener('click', () =>{
    hamburgerBar1.classList.add('is-active')
    hamburgerBar2.classList.add('is-active')
    menu.classList.add('is-active')
  })
}