let numeroSecreto = 0;;
let intentos = 0;
console.log(numeroSecreto)

function asignarTextoElemto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemto("p", `Acertastes el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemto("p","El numero secreto es menor");
        }else{
            asignarTextoElemto("p","El numero secreto es mayor");
        }
        intentos++

        limpiarCaja();
    } 
    return
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;    
}

function condicionesIniciales(){
    asignarTextoElemto("h1", "juego del numero secreto");
    asignarTextoElemto("p", "eligue un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiarCaja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //Deshabilitar el boton de nuevo numero
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()