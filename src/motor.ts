import {partida} from "./model";

// Da la partida por inactiva

export const juegoAcabado = () => partida.juegoActivo = false;

// Check de Game Over

export const checkGameOver = () : boolean => partida.puntuacion > 7.5;

// Devuelve mensaje en función de la puntuación
export const MensajeFinal = () => {
    let mensaje= "";
    if (partida.puntuacion > 7.5) {
        mensaje = "Game Over";
    } else if (partida.puntuacion === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    } else if (partida.puntuacion >= 6 && partida.puntuacion < 7.5) {
        mensaje = "Casi casi...";
    } else if (partida.puntuacion === 5) {
        mensaje = "Te ha entrado el canguelo eh?";
    } else if (partida.puntuacion < 4) {
        mensaje = "Has sido muy conservador.";
    }

    return mensaje;
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
  partida.puntuacion += puntos;
};

