var ingressos = document.querySelector("#ingresso");

var resposta = document.querySelector("#resposta");

var valor = 7.00;

function calcula_valor() {
    var total = ingressos.valueAsNumber * valor;
    resposta.textContent = total + "R$";



}