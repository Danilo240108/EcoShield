var mensagens = [
    "Monitoramento ativo",
    "Área em observação",
    "Sistema funcionando normalmente"
];

var indice = 0;

var titulo = document.querySelector("header p");

setInterval(function(){

    indice++;

    if(indice >= mensagens.length){
        indice = 0;
    }

    titulo.textContent = mensagens[indice];

}, 4000);