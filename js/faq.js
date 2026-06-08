var perguntas = document.querySelectorAll('.faq-question');

perguntas.forEach(function(pergunta){

    pergunta.addEventListener('click', function(){

        var resposta = pergunta.nextElementSibling;

        document.querySelectorAll('.faq-answer').forEach(function(item){

            if(item !== resposta){
                item.style.display = "none";
            }

        });

        if(resposta.style.display === "block"){
            resposta.style.display = "none";
        }
        else{
            resposta.style.display = "block";
        }

    });

});