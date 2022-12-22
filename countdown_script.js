const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const copa2026 = "1 dec 2023"

function countdown(){
    const datacopa = new Date(copa2026)
    const hoje = new Date()

    const segundostotal = (datacopa - hoje)/1000;
    const finalDias = Math.floor(segundostotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segundostotal / 60 / 60) %24;
    const finalMinutos = Math.floor(segundostotal / 60) %60;
    const finalSegundos = Math.floor(segundostotal) %60;

    dia.innerHTML = finalDias + ("D")
    hora.innerHTML = formatacao(finalHoras) + ("H") //chama a função de formatação do tempo e aplica a finalHoras
    minuto.innerHTML = formatacao(finalMinutos) + ("M") //chama a função de formatação do tempo e aplica a finalMinutos
    segundo.innerHTML = formatacao(finalSegundos) + ("S")  //chama a função de formatação do tempo e aplica a finalSegundos
}

function formatacao(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}
countdown();
setInterval(countdown, 1000)