var perguntas = document.querySelectorAll('.faq-question');

perguntas.forEach(function(pergunta){

    pergunta.addEventListener('click', function(){

        console.log('Pergunta clicada');

    });

});