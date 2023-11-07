import fetch from 'node-fetch';

const url = 'http://localhost:3000/lanzarDado';

async function lanzarDado() {
  const response = await fetch(url, {
    method: 'POST'
  });

  if (!response.ok) {
    console.error('Error en la solicitud POST:', response.status);
    return;
  }

  const data = await response.json();
  console.log(data.mensaje);

  if (data.resultado) {
    console.log(data.resultado);
    return;
  }

  const dado = data.estado.turno === 'Jugador 1' ? data.estado.jugador1 : data.estado.jugador2;

  switch (dado) {
    case 5:
      console.log('El jugador avanza a la casilla 9 ("La Oca").');
      break;
    case 6:
      console.log('El jugador avanza a la casilla 12 ("Puente").');
      break;
    case 9:
      console.log('El jugador avanza a la casilla 14 ("La Oca").');
      break;
    case 12:
      console.log('El jugador retrocede a la casilla 6 ("Puente").');
      break;
    case 58:
      console.log('El jugador retrocede a la casilla 1 ("La Muerte").');
      break;
    default:
      console.log(`El jugador ha lanzado un ${dado}.`);
  }
}

// Comenzar el juego lanzando para el primer jugador
lanzarDado();