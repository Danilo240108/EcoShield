// Navegação mobile (hamburguer)
const nav = document.querySelector('nav ul');
const logo = document.querySelector('.logo');

// Destaca o link ativo conforme a página atual
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('ativo');
    }
});

// Validação e envio do formulário
const form = document.querySelector('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeValido = nome.value.trim().length >= 2;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    const mensagemValida = mensagem.value.trim().length >= 10;

    limparErros();

    if (!nomeValido) {
        mostrarErro(nome, 'Por favor, insira um nome válido (mínimo 2 caracteres).');
    }

    if (!emailValido) {
        mostrarErro(email, 'Por favor, insira um e-mail válido.');
    }

    if (!mensagemValida) {
        mostrarErro(mensagem, 'A mensagem deve ter pelo menos 10 caracteres.');
    }

    if (nomeValido && emailValido && mensagemValida) {
        mostrarSucesso();
        form.reset();
    }
});

function mostrarErro(campo, mensagemErro) {
    const erro = document.createElement('span');
    erro.classList.add('erro');
    erro.textContent = mensagemErro;
    campo.parentElement.appendChild(erro);
    campo.style.borderColor = '#e74c3c';
}

function limparErros() {
    document.querySelectorAll('.erro').forEach(e => e.remove());
    [nome, email, mensagem].forEach(campo => campo.style.borderColor = '');
}

function mostrarSucesso() {
    // Remove aviso anterior se existir
    const anterior = document.getElementById('aviso-sucesso');
    if (anterior) anterior.remove();

    const aviso = document.createElement('p');
    aviso.id = 'aviso-sucesso';
    aviso.textContent = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
    aviso.style.cssText = 'color: #1D9E75; font-weight: bold; margin-top: 12px;';
    form.appendChild(aviso);

    setTimeout(() => aviso.remove(), 5000);
}

// Efeito suave de scroll ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.4s ease';
    setTimeout(() => document.body.style.opacity = 1, 50);
});