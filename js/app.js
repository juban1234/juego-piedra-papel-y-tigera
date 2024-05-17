function piedra() {
    let resultado = CPU();
    let mensaje = "";
    if (resultado == 0) {
        mensaje = "Empate - Ambos sacaron piedra";
    } else if (resultado == 1) {
        mensaje = "Perdiste - La CPU sacó papel";
    } else if (resultado == 2) {
        mensaje = "Ganaste - La CPU sacó tijera";
    }
    document.getElementById("resultado").textContent = mensaje;
}

document.addEventListener('DOMContentLoaded', function() {
    var botonPi = document.getElementById('piedra');
    botonPi.addEventListener('click', piedra);
});
 
function papel() {
    let resultado = CPU();
    let mensaje = "";
    if (resultado == 0) {
    mensaje = "Ganaste - La CPU sacó piedra";
    } else if (resultado == 1) {
    mensaje = "Empate - Ambos sacaron papel";
    } else if (resultado == 2) {
    mensaje = "Perdiste - La CPU sacó tijera";
    }
    document.getElementById("resultado").textContent = mensaje;
}
 
document.addEventListener('DOMContentLoaded', function() {
    var botonPa = document.getElementById('papel');
    botonPa.addEventListener('click', papel);
});
 
function tigera() {
    let resultado = CPU();
    let mensaje = "";
    if (resultado == 0) {
    mensaje = "Perdiste - La CPU sacó piedra";
    } else if (resultado == 1) {
    mensaje = "Ganaste - La CPU sacó papel";
    } else if (resultado == 2) {
    mensaje = "Empate - Ambos sacaron tijera";
    }
    document.getElementById("resultado").textContent = mensaje;
}

document.addEventListener('DOMContentLoaded', function() {
    var botonTi = document.getElementById('tigera');
    botonTi.addEventListener('click', tigera);
});
 
function CPU() {
    let CPU = Math.floor(Math.random() * 3);
    return CPU;
}
 