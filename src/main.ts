// Variables iniciales
let puntuacion = 0;
let juegoActivo = true;

// Obteniendo elementos del DOM
const scoreDiv = document.getElementById('puntuacion') as HTMLDivElement;
const imagenCarta = document.getElementById('imagenCarta');
const pideCartaBoton = document.getElementById('dameCarta') as HTMLButtonElement;
const plantarseBoton = document.getElementById('plantarse') as HTMLButtonElement;
const nuevaPartidaBoton = document.getElementById('nuevaPartida') as HTMLButtonElement;

// Muestra la puntuación actual
const muestraPuntuacion = () => {
    scoreDiv.textContent = `Puntuación: ${puntuacion}`;
}

// Saca un numero aleatorio
const obtenerNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

// Devuelve una carta al azar en base a un numero aleatorio
const obtenerNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
    }
    return numeroAleatorio;
};

// Devuelve la url de la imagen de la carta obtenida al azar
const obtenerUrlCarta = (carta: number) => {
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
const mostrarCarta = (urlCarta : string) : void =>  {
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {   
        imagenCarta.src = urlCarta
    }
}

// Comprueba el valor de la carta sacada
const comprobarCarta = (carta: number) => {
    if (carta >= 10) {
        return 0.5;
    } else {
        return carta;
    }  
}

// Suma la puntuacion de carta obtenida al contador de puntuacion
const sumarPuntuacion = (puntos: number) : void => {
    puntuacion += puntos;
}

// Comprueba si has superado la puntuación máxima permitida y finaliza la partida
const checkEstadoPartida = () : void => {
    if (puntuacion > 7.5) {
        juegoActivo = false;
        alert("Game Over");
        plantarseBoton.style.display = 'none';
        pideCartaBoton.style.display = 'none';
        nuevaPartidaBoton.style.display = 'block';
        puntuacion = 0;
    }
}

// Resetea las variables para iniciar una nueva partida
const resetPartida = () : void => {
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement) {   
    imagenCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
    plantarseBoton.style.display = 'block';
    pideCartaBoton.style.display = 'block';
    nuevaPartidaBoton.style.display = 'none';
    puntuacion = 0;
    juegoActivo = true;
    }
}

// Actualiza las variables para finzar la partida actual
const finalizarPartida = () : void => {
    juegoActivo = false;
    plantarseBoton.style.display = 'none';
    pideCartaBoton.style.display = 'none';
    nuevaPartidaBoton.style.display = 'block';
}

// Agrega puntuación de la carta
const actualizarPuntuacion = (carta: number) => {
    sumarPuntuacion(comprobarCarta(carta));
    document.addEventListener("DOMContentLoaded", muestraPuntuacion);
    muestraPuntuacion();
    checkEstadoPartida();
    }

// Devuelve una carta aleatoria
const dameCarta = () : void => {
    const numeroAleatorio = obtenerNumeroAleatorio();
    const carta = obtenerNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    actualizarPuntuacion(carta);
  }

// Muestra mensaje final después de plantarte
const mostrarMensajeFinal = () => {
    if (puntuacion === 7.5) {
        alert("¡Lo has clavado! ¡Enhorabuena!");
    } else if (puntuacion < 4) {
        alert("Has sido muy conservador.");
    } else if (puntuacion === 5) {
        alert("Te ha entrado el canguelo eh?");
    } else if (puntuacion >= 6 && puntuacion < 7.5) {
        alert("Casi casi...");
    }
}

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
