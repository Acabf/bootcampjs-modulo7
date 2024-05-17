import {scoreDiv, imagenCarta, pideCartaBoton, plantarseBoton, nuevaPartidaBoton} from "./model";


// Variables iniciales
export let puntuacion = 0;
export let juegoActivo = true;

// Muestra la puntuación actual
export const muestraPuntuacion = () => {
  scoreDiv.textContent = `Puntuación: ${puntuacion}`;
};

// Saca un numero aleatorio
export const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Devuelve una carta al azar en base a un numero aleatorio
export const obtenerNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

// Devuelve la url de la imagen de la carta obtenida al azar
export const obtenerUrlCarta = (carta: number) => {
const baseUrl =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas";
switch (carta) {
  case 1:
    return `${baseUrl}/1_as-copas.jpg`;
  case 2:
    return `${baseUrl}/2_dos-copas.jpg`;
  case 3:
    return `${baseUrl}/3_tres-copas.jpg`;    
  case 4:
    return `${baseUrl}/4_cuatro-copas.jpg`;
  case 5:
    return `${baseUrl}/5_cinco-copas.jpg`;
  case 6:
    return `${baseUrl}/6_seis-copas.jpg`;   
  case 7:
    return `${baseUrl}/7_siete-copas.jpg`;      
  case 10:
    return `${baseUrl}/10_sota-copas.jpg`;
  case 11:
    return `${baseUrl}/11_caballo-copas.jpg`;
  case 12:
    return `${baseUrl}/12_rey-copas.jpg`;                        
  default:
    return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
}
};

// Cambia la imagen de la carta que se ha sacado
export const mostrarCarta = (urlCarta : string) : void =>  {
  if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {   
      imagenCarta.src = urlCarta
  }
};

// Comprueba el valor de la carta sacada
export const comprobarCarta = (carta: number) => {
  if (carta >= 10) {
      return 0.5;
  } else {
      return carta;
  }  
};

// Suma la puntuacion de carta obtenida al contador de puntuacion
export const sumarPuntuacion = (puntos: number) : void => {
  puntuacion += puntos;
};

// Comprueba si has superado la puntuación máxima permitida y finaliza la partida
export const checkEstadoPartida = () : void => {
  if (puntuacion > 7.5) {
      juegoActivo = false;
      alert("Game Over");
      plantarseBoton.style.display = 'none';
      pideCartaBoton.style.display = 'none';
      nuevaPartidaBoton.style.display = 'block';
      puntuacion = 0;
  }
};

// Resetea las variables para iniciar una nueva partida
export const resetPartida = () : void => {
  if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {   
  imagenCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
  plantarseBoton.style.display = 'block';
  pideCartaBoton.style.display = 'block';
  nuevaPartidaBoton.style.display = 'none';
  puntuacion = 0;
  juegoActivo = true;
  }
};

// Actualiza las variables para finzar la partida actual
export const finalizarPartida = () : void => {
  juegoActivo = false;
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