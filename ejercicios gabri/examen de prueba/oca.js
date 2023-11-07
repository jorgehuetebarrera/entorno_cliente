import express from 'express';
import { json } from 'express';

const app = express();
const port = 3000;
app.use(json());

let jugador1 = 1;
let jugador2 = 1;
let turnoJugador1 = true;
let finDeJuego = false;

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function moverJugador(jugador, dado) {
  jugador += dado;

  switch (jugador) {
    case 5:
      jugador = 9;
      break;
    case 6:
      jugador = 12;
      break;
    case 9:
      jugador = 14;
      break;
    case 12:
      jugador = 6;
      break;
    case 58:
      jugador = 1;
      break;
  }

  return jugador;
}

function comprobarFinDeJuego() {
  if (jugador1 >= 63 || jugador2 >= 63) {
    finDeJuego = true;
  }
}

function mostrarResultado() {
  if (jugador1 >= 63 && jugador2 >= 63) {
    return "Empate.";
  } else if (jugador1 >= 63) {
    return "Jugador 1 ha ganado.";
  } else {
    return "Jugador 2 ha ganado.";
  }
}

function cambiarTurno() {
  turnoJugador1 = !turnoJugador1;
}

app.get('/estado', (req, res) => {
  res.json({
    jugador1: jugador1,
    jugador2: jugador2,
    turno: turnoJugador1 ? "Jugador 1" : "Jugador 2"
  });
});

app.get('/lanzarDado', (req, res) => {
  if (finDeJuego) {
    res.status(400).json({ mensaje: "El juego ha terminado." });
    return;
  }

  const dado = lanzarDado();
  const jugadorActual = turnoJugador1 ? "Jugador 1" : "Jugador 2";

  if (turnoJugador1) {
    jugador1 = moverJugador(jugador1, dado);
  } else {
    jugador2 = moverJugador(jugador2, dado);
  }

  comprobarFinDeJuego();
  cambiarTurno();

  const resultado = {
    mensaje: `${jugadorActual} ha lanzado un ${dado}.`,
    estado: {
      jugador1: jugador1,
      jugador2: jugador2,
      turno: turnoJugador1 ? "Jugador 1" : "Jugador 2"
    }
  };

  if (finDeJuego) {
    resultado.resultado = mostrarResultado();
  }

  res.json(resultado);
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});