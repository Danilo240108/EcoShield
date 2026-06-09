// Destaca o link ativo no menu conforme a página atual
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('ativo');
    }
});

// Fade-in suave ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.4s ease';
    setTimeout(() => document.body.style.opacity = 1, 50);
});

// Animação de entrada nos cards conforme o usuário rola a página
const cards = document.querySelectorAll('.card-integrante');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target); // Para de observar após aparecer
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.cssText = 'opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease;';
    observador.observe(card);
});

// Fallback: se IntersectionObserver não for suportado, mostra todos os cards
if (!('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('visivel'));
}

// Aplica a animação quando a classe 'visivel' é adicionada
const estilo = document.createElement('style');
estilo.textContent = `.card-integrante.visivel { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(estilo);

// Tratamento de foto ausente (fallback para imagem quebrada)
const fotos = document.querySelectorAll('.card-integrante img');
fotos.forEach(foto => {
    foto.addEventListener('error', function () {
        this.src = 'https://placehold.co/120x120?text=Sem+Foto';
        this.alt = 'Foto não disponível';
    });
});