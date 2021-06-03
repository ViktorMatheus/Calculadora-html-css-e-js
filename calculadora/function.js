var textoResposta = document.querySelector("#resultado-da-calculadora")

var numeroZero = document.querySelector("#zero").addEventListener('click', recuperarValor0)
var numeroUm = document.querySelector("#um").addEventListener('click', recuperarValor1)
var numeroDois = document.querySelector("#dois").addEventListener('click', recuperarValor2)
var numeroTres = document.querySelector("#tres").addEventListener('click', recuperarValor3)
var numeroQuatro = document.querySelector("#quatro").addEventListener('click', recuperarValor4)
var numeroCinco = document.querySelector("#cinco").addEventListener('click', recuperarValor5)
var numeroSeis = document.querySelector("#seis").addEventListener('click', recuperarValor6)
var numeroSete = document.querySelector("#sete").addEventListener('click', recuperarValor7)
var numeroOito = document.querySelector("#oito").addEventListener('click', recuperarValor8)
var numeroNove = document.querySelector("#nove").addEventListener('click', recuperarValor9)

var adicao = document.querySelector('#adicao').addEventListener('click', recuperarAdicao)
var subtracao = document.querySelector('#subtracao').addEventListener('click', recuperarSubtracao)
var multiplicacao = document.querySelector('#multiplicacao').addEventListener('click', recuperarMultiplicacao)
var divisao = document.querySelector('#divisao').addEventListener('click', recuperarDivisao)
var igual = document.querySelector('#sinal-de-igual').addEventListener('click',  recuperarIgual)


numeroZero = 0
numeroUm = 1
numeroDois = 2
numeroTres = 3 
numeroQuatro = 4
numeroCinco = 5
numeroSeis = 6
numeroSete = 7
numeroOito = 8
numeroNove = 9 


function recuperarValor0(){
    textoResposta.innerHTML += (numeroZero)
}

function recuperarValor1(){
    textoResposta.innerHTML += (numeroUm)
}

function recuperarValor2(){
    textoResposta.innerHTML += (numeroDois)
}

function recuperarValor3(){
    textoResposta.innerHTML += (numeroTres)
}

function recuperarValor4(){
    textoResposta.innerHTML += (numeroQuatro)
}

function recuperarValor5(){
    textoResposta.innerHTML += (numeroCinco)
}

function recuperarValor6(){
    textoResposta.innerHTML += (numeroSeis)
}

function recuperarValor7(){
    textoResposta.innerHTML += (numeroSete)
}

function recuperarValor8(){
    textoResposta.innerHTML += (numeroOito)
}

function recuperarValor9(){
    textoResposta.innerHTML += (numeroNove)
}

function recuperarAdicao(){
    textoResposta.innerHTML += (" + ")
}


function recuperarSubtracao(){
    textoResposta.innerHTML += (" - ")
}


function recuperarDivisao(){
    textoResposta.innerHTML += (" / ")
}


function recuperarMultiplicacao(){
    textoResposta.innerHTML += (" * ")
}

function recuperarIgual() {
    textoResposta.innerHTML += (" = ")
}
