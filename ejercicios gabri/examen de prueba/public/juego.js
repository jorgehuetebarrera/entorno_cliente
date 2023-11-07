const turnoInfo = document.getElementById("turnoInfo");
const mensaje = document.getElementById("mensaje");
const lanzarDadoButton = document.getElementById("lanzarDado");
const pasarTurnoButton = document.getElementById("pasarTurno");

let jugador = 1;

function obtenerEstadoJuego() {
  fetch("/estado-juego") // Realiza una solicitud GET al servidor para obtener el estado del juego
    .then((response) => response.json())
    .then((data) => {
      const estadoJugador = document.getElementById("estadoJugador");
      const estadoMaquina = document.getElementById("estadoMaquina");
      const jugadorActual = document.getElementById("jugadorActual");

      estadoJugador.textContent = `Posición del Jugador: ${data.posicionJugador}`;
      estadoMaquina.textContent = `Posición de la Máquina: ${data.posicionMaquina}`;
      jugadorActual.textContent = `Turno del Jugador ${data.jugadorActual}`;
    });
}

obtenerEstadoJuego(); 

lanzarDadoButton.addEventListener("click", () => {
  fetch("/lanzar-dado", { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      mensaje.textContent = data.mensaje;
      turnoInfo.textContent = `Es el turno del Jugador ${jugador}`;
      jugador = 3 - jugador; // Alternar entre Jugador 1 y Jugador 2
    });
});

pasarTurnoButton.addEventListener("click", () => {
  fetch("/pasar-turno", { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      mensaje.textContent = data.mensaje;
      turnoInfo.textContent = `Es el turno del Jugador ${jugador}`;
      jugador = 3 - jugador; // Alternar entre Jugador 1 y Jugador 2
    });
});