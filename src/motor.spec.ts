import { obtenerNumeroCarta, comprobarCarta, sumarPuntuacion, MensajeFinal, checkGameOver, juegoAcabado } from './motor';
import { partida } from './model';


describe('Motor Tests', () => {
  
  beforeEach(() => {
    // Resetea el juego para cada testeo
    partida.puntuacion = 0;
    partida.juegoActivo = true;
  });

  it('debería salir Game Over y finalizar la partida si la puntuacion pasa de 7.5', () => {
    // Arrange
    partida.puntuacion = 7.6; // Excedemos el máximo de puntos permitido
    
    // Act
    checkGameOver();
    juegoAcabado();
    MensajeFinal();

    // Assert
    expect(checkGameOver()).toBe(true);
    expect(partida.juegoActivo).toBe(false);
    expect(MensajeFinal()).toBe("Game Over");
  });

  it('debería actualizar la puntuación correctamente cuando saco una carta mayor que 7', () => {
    // Arrange
    const carta = obtenerNumeroCarta(8);  // Genero una carta mayor que 7
    const puntos = comprobarCarta(carta); // Saco los puntos que representaría

    // Act
    sumarPuntuacion(puntos); // Sumo los puntos a la puntuación de la partida

    // Assert
    expect(partida.puntuacion).toBe(0.5);  // Puntos por la carta > 7 son 0.5
  });

  it('debería actualizar la puntuación correctamente cuando saco una carta menor o igual que 7', () => {
    // Arrange
    const carta = obtenerNumeroCarta(5);  // Genera una carta <= 7
    const puntos = comprobarCarta(carta); // Saco los puntos que representaría 

    // Act
    sumarPuntuacion(puntos); // Sumo los puntos a la puntuación de la partida

    // Assert
    expect(partida.puntuacion).toBe(5);  // Los puntos son el valor de la carta <= 7
  });

  it('debería pasar el estado del juego a inactivo cuando el jugador se planta, y debería salir un mensaje según su puntuación', () => {
    // Arrange
    partida.puntuacion = 6;  

    // Act
    juegoAcabado();
    MensajeFinal();

    // Assert
    expect(partida.juegoActivo).toBe(false);
    expect(MensajeFinal()).toBe("Casi casi...");
  });

});
