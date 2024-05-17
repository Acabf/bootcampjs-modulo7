import {pideCartaBoton, plantarseBoton, nuevaPartidaBoton} from "./model";
import {juegoActivo, dameCarta, finalizarPartida, muestraPuntuacion, resetPartida} from "./motor";
import {mostrarMensajeFinal} from "./ui";

document.addEventListener("DOMContentLoaded", dameCarta);

// Evento para pedir carta
pideCartaBoton.addEventListener('click', () => {
    if (juegoActivo) {
        dameCarta();
    }
});

// Evento para plantarse
plantarseBoton.addEventListener('click', () => {
    finalizarPartida();
    mostrarMensajeFinal();
});

// Evento para nueva partida
nuevaPartidaBoton.addEventListener('click', () => {
    muestraPuntuacion();
    resetPartida();
});

// Mostrar puntuación inicial
muestraPuntuacion();
