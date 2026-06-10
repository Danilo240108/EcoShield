
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));



const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => navObserver.observe(section));



document.querySelectorAll('.alert-row').forEach(row => {
  row.addEventListener('click', () => {
    const nivel = row.querySelector('.alert-badge').textContent.trim();
    const descricao = row.querySelector('.alert-text').textContent.trim();
    alert(`Nível: ${nivel}\n\n${descricao}`);
  });
});



const btnTopo = document.createElement('button');
btnTopo.textContent = '↑';
btnTopo.id = 'btn-topo';
btnTopo.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #3aaa35;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  display: none;
  z-index: 999;
  transition: opacity 0.3s;
`;
document.body.appendChild(btnTopo);

window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 400 ? 'block' : 'none';
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



const footer = document.querySelector('footer p');
if (footer) {
  footer.innerHTML = footer.innerHTML.replace('2025', new Date().getFullYear());
}