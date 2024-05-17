//piedra
function piedra() {
   let piedra = 0;
   let resultado = CPU();
   if (piedra == resultado) {
    console.log("Empate");
   }   else if (piedra == 0 && resultado == 1) {
    console.log("perdiste");
   }else if (piedra == 0 && resultado == 2) {
    console.log("Ganaste");
   }
   console.log("cpu: " + resultado +" piedra: " + piedra);
}

document.addEventListener('DOMContentLoaded', function() {
    var botonPi = document.getElementById('piedra');
    botonPi.addEventListener('click', piedra);
});
////////////////
function papel() {
    let papel = 1;
    let resultado = CPU();
    if (papel == resultado) {
     console.log("Empate");
    }   else if (papel == 1 && resultado == 2) {
     console.log("perdiste");
    }else if (papel == 1 && resultado == 0) {
     console.log("Ganaste");
    }
    console.log("cpu: " + resultado +" papel: " + papel);
}

document.addEventListener('DOMContentLoaded', function() {
    var botonPa = document.getElementById('papel');
    botonPa.addEventListener('click', papel);
});

function tigera() {
    let tigera = 2;
    let resultado = CPU();
    if (tigera == resultado) {
     console.log("Empate");
    }   else if (tigera == 2 && resultado == 0) {
     console.log("perdiste");
    }else if (tigera == 2 && resultado == 1) {
     console.log("Ganaste");
    }
    console.log("cpu: " + resultado +" piedra: " + tigera);
}

document.addEventListener('DOMContentLoaded', function() {
    var botonTi = document.getElementById('tigera');
    botonTi.addEventListener('click', tigera);
});

function CPU() {
    let CPU = Math.floor(Math.random() * 3);
    return CPU;
}
