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
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, index) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
  revealObserver.observe(el);
});

/*
   5. CONTADOR DE ALERTAS DINÂMICO NA NAV
 */