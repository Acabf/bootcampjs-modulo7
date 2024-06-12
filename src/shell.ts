import {partida} from "./model";
import {dameCarta, pideCartaBoton, plantarseBoton, nuevaPartidaBoton, finalizarPartida, mostrarMensajeFinal, muestraPuntuacion, resetPartida} from "./ui";

document.addEventListener("DOMContentLoaded", dameCarta);

// Evento para pedir carta
pideCartaBoton.addEventListener('click', () => {
    if (partida.juegoActivo) {
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
