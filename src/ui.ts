import {puntuacion} from "./motor";

// Muestra mensaje final después de plantarte
export const mostrarMensajeFinal = () => {
    if (puntuacion === 7.5) {
        alert("¡Lo has clavado! ¡Enhorabuena!");
    } else if (puntuacion < 4) {
        alert("Has sido muy conservador.");
    } else if (puntuacion === 5) {
        alert("Te ha entrado el canguelo eh?");
    } else if (puntuacion >= 6 && puntuacion < 7.5) {
        alert("Casi casi...");
    }
};


