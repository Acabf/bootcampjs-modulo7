import {partida} from "./model";
import {obtenerNumeroAleatorio, obtenerNumeroCarta, obtenerUrlCarta, comprobarCarta, sumarPuntuacion, juegoAcabado, checkGameOver, MensajeFinal} from "./motor";

// Obteniendo elementos del DOM
export const scoreDiv = document.getElementById('puntuacion') as HTMLDivElement;
export const imagenCarta = document.getElementById('imagenCarta');
export const pideCartaBoton = document.getElementById('dameCarta') as HTMLButtonElement;
export const plantarseBoton = document.getElementById('plantarse') as HTMLButtonElement;
export const nuevaPartidaBoton = document.getElementById('nuevaPartida') as HTMLButtonElement;



// Muestra mensaje final después de plantarte
export const mostrarMensajeFinal = () => {
    alert(MensajeFinal());
};

// Muestra la puntuación actual
export const muestraPuntuacion = () => {
    scoreDiv.textContent = `Puntuación: ${partida.puntuacion}`;
  };

// Cambia la imagen de la carta que se ha sacado
export const mostrarCarta = (urlCarta : string) : void =>  {
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {   
        imagenCarta.src = urlCarta
    }
  };

// Resetea las variables para iniciar una nueva partida
export const resetPartida = () : void => {
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {   
    imagenCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
    plantarseBoton.style.display = 'block';
    pideCartaBoton.style.display = 'block';
    nuevaPartidaBoton.style.display = 'none';
    partida.puntuacion = 0;
    partida.juegoActivo = true;
    }
  };
  
  // Actualiza las variables para finzar la partida actual plantándote
  export const finalizarPartida = () : void => {
    juegoAcabado();
    plantarseBoton.style.display = 'none';
    pideCartaBoton.style.display = 'none';
    nuevaPartidaBoton.style.display = 'block';
  };
  
  // Agrega puntuación de la carta
  export const actualizarPuntuacion = (carta: number) => {
    sumarPuntuacion(comprobarCarta(carta));
    document.addEventListener("DOMContentLoaded", muestraPuntuacion);
    muestraPuntuacion();
    checkEstadoPartida();
  };
  
  // Devuelve una carta aleatoria
  export const dameCarta = () : void => {
    const numeroAleatorio = obtenerNumeroAleatorio();
    const carta = obtenerNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    actualizarPuntuacion(carta);
  };

// Comprueba si has superado la puntuación máxima permitida y finaliza la partida
export const checkEstadoPartida = () : void => {
    if (checkGameOver()) {
        juegoAcabado();
        alert(MensajeFinal());
        plantarseBoton.style.display = 'none';
        pideCartaBoton.style.display = 'none';
        nuevaPartidaBoton.style.display = 'block';
        partida.puntuacion = 0;
    }
  };
