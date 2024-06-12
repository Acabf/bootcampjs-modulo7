import { comprobarCarta, sumarPuntuacionAcumulada, sumarPuntuacion, MensajeFinal, checkGameOver, juegoAcabado } from './motor';
import { partida } from './model';
import { vi } from "vitest";


describe('Motor Tests', () => {
/*  
  beforeEach(() => {
    // Resetea el juego para cada testeo
    partida.puntuacion = 0;
    partida.juegoActivo = true;
  });
*/
  it('debería salir Game Over y finalizar la partida si la puntuacion pasa de 7.5', () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.6);
       
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
    const puntos = comprobarCarta(10); 
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(0);

    const puntosEsperados = 0.5;

    // Act
    const puntosAcumulados = sumarPuntuacionAcumulada(puntos); // Sumo los puntos a la puntuación de la partida

    // Assert
    expect(puntosAcumulados).toBe(puntosEsperados);  // Puntos por la carta > 7 son 0.5
  });

  it('debería actualizar la puntuación correctamente cuando saco una carta menor o igual que 7', () => {
    // Arrange
    const puntos = comprobarCarta(5); 
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(0);

    const puntosEsperados = 5;

    // Act
    const puntosAcumulados = sumarPuntuacionAcumulada(puntos); // Sumo los puntos a la puntuación de la partida

    // Assert
    expect(puntosAcumulados).toBe(puntosEsperados);  // Puntos por la carta > 7 son 0.5
  });


  it('debería pasar el estado del juego a inactivo cuando el jugador se planta, y debería salir un mensaje según su puntuación', () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(6);

    // Act
    juegoAcabado();
    MensajeFinal();

    // Assert
    expect(partida.juegoActivo).toBe(false);
    expect(MensajeFinal()).toBe("Casi casi...");
  });

});
