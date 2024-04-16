window.addEventListener('DOMContentLoaded', () => {
    const numeroTurno  = document.getElementById('numero-turno')!;
    const btnPrev  = document.getElementById('prev-turno')!;
    const btnNext  = document.getElementById('next-turno')!;
    const btnReset  = document.getElementById('reset-turno')!;
    const btnSet  = document.getElementById('set-turno')!;
    const inputTurno  = document.getElementById('input-turno')  as HTMLInputElement;
  
    let turnoActual = 1;
  
    const actualizarTurno = (turno: number) => {
      turnoActual = turno;
      numeroTurno.textContent = turno.toString().padStart(2, '0');
    };
  
    btnPrev.addEventListener('click', () => {
      if (turnoActual > 1) actualizarTurno(turnoActual - 1);
    });
  
    btnNext.addEventListener('click', () => {
      actualizarTurno(turnoActual + 1);
    });
  
    btnReset.addEventListener('click', () => {
      actualizarTurno(1);
    });
  
    btnSet.addEventListener('click', () => {
      const valorTurno = parseInt(inputTurno.value, 10);
      if (!isNaN(valorTurno) && valorTurno > 0) {
        actualizarTurno(valorTurno);
      }
    });
  });
  