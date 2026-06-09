

   var toggle   = document.querySelector('.nav-toggle');
var navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });


  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}


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


  var alertValues  = [3, 4, 2, 5, 3];
var alertIndex   = 0;
var navAlertText = document.getElementById('navAlertText');

setInterval(function () {
  alertIndex = (alertIndex + 1) % alertValues.length;
  if (navAlertText) {
    navAlertText.textContent = alertValues[alertIndex] + ' alertas ativos';
  }
}, 8000);


var counters = [
  { id: 'stat1', target: 2400 },
  { id: 'stat2', target: 147  },
  { id: 'stat3', target: 27   },
  { id: 'stat4', target: 3200000 },
];

counters.forEach(function(c) {
  var el = document.getElementById(c.id);
  if (!el) return;
  var start = 0;
  var duration = 2000;
  var step = c.target / (duration / 16);
  var timer = setInterval(function() {
    start += step;
    if (start >= c.target) { start = c.target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString('pt-BR');
  }, 16);
});