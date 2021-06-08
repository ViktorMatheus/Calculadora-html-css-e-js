var textoResposta = document.querySelector("#resultado-da-calculadora")

var numeroZero = document.querySelector("#zero").addEventListener('click', recuperarValor)
var numeroUm = document.querySelector("#um").addEventListener('click', recuperarValor)
var numeroDois = document.querySelector("#dois").addEventListener('click', recuperarValor)
var numeroTres = document.querySelector("#tres").addEventListener('click', recuperarValor)
var numeroQuatro = document.querySelector("#quatro").addEventListener('click', recuperarValor)
var numeroCinco = document.querySelector("#cinco").addEventListener('click', recuperarValor)
var numeroSeis = document.querySelector("#seis").addEventListener('click', recuperarValor)
var numeroSete = document.querySelector("#sete").addEventListener('click', recuperarValor)
var numeroOito = document.querySelector("#oito").addEventListener('click', recuperarValor)
var numeroNove = document.querySelector("#nove").addEventListener('click', recuperarValor)

var adicao = document.querySelector('#adicao').addEventListener('click', recuperarAdicao)
var subtracao = document.querySelector('#subtracao').addEventListener('click', recuperarSubtracao)
var multiplicacao = document.querySelector('#multiplicacao').addEventListener('click', recuperarMultiplicacao)
var divisao = document.querySelector('#divisao').addEventListener('click', recuperarDivisao)
var igual = document.querySelector('#sinal-de-igual').addEventListener('click',  resultado)

function recuperarValor(){
    numeroZero  = 0
    numeroUm = 1
    numeroDois = 2
    numeroTres = 3 
    numeroQuatro = 4
    numeroCinco = 5
    numeroSeis = 6
    numeroSete = 7
    numeroOito = 8
    numeroNove = 9

}

