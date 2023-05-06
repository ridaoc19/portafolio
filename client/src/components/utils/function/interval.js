// variable para almacenar nuestro intervalID
let nIntervId;
let response = false;

function changeColor() {
    // comprobar si ya se ha configurado un intervalo
    if (!nIntervId) {
        nIntervId = setInterval(()=>{flashText(id)}, 1000);
    }
}

function flashText(id) {
    const oElem = document.getElementById(id);
    console.log(oElem);
    if (oElem) {
        stopTextColor()
    } 
}

function stopTextColor() {
    clearInterval(nIntervId);
    // liberar nuestro inervalId de la variable
    nIntervId = null;
}

function inteval() {
    changeColor()
}

