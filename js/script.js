/* 
   ECOSHIELD — script.js
*/

/* 
   1. MENU MOBILE 
 */

   var toggle   = document.querySelector('.nav-toggle');
var navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  /* Fecha o menu ao clicar em qualquer link */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* 
   2. NAV ATIVO NO SCROLL
 */
