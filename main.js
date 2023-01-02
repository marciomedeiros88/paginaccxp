
const ingressos = [];

function cresceBotaoQuinta(){
    let ingQuinta = document.getElementById('quinta').style.width = "145px";
    ingQuinta = document.getElementById('quinta').style.transition = "1000ms";
}

function decresceBotaoQuinta(){
    let ingQuinta = document.getElementById('quinta').style.width = "auto";
}

function cresceBotaoSexta(){
    let ingSexta = document.getElementById('sexta').style.width = "145px";
}

function decresceBotaoSexta(){
    let ingSexta = document.getElementById('sexta').style.width = "auto";
}

function cresceBotaoSabado(){
    let ingSabado = document.getElementById('sabado').style.width = "145px";
}

function decresceBotaoSabado(){
    let ingSabado = document.getElementById('sabado').style.width = "auto";
}

function cresceBotaoDomingo(){
    let ingDomingo = document.getElementById('domingo').style.width = "145px";
}

function decresceBotaoDomingo(){
    let ingDomingo = document.getElementById('domingo').style.width = "auto";
}

function selecionarIngresso(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);
}

function mostrarIngressos(){
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}