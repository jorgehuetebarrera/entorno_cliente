
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = 0; 

function adivinarNumero() {
  const numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  if (isNaN(numeroIngresado)) {
    alert("Por favor, ingresa un número válido.");
  } else {
    intentos++;

    if (numeroIngresado < numeroAleatorio) {
      alert("El número es mayor. Intenta de nuevo.");
      adivinarNumero();
    } else if (numeroIngresado > numeroAleatorio) {
      alert("El número es menor. Intenta de nuevo.");
      adivinarNumero();
    } else {
      alert(`¡Adivinaste el número ${numeroAleatorio} en ${intentos} intentos!`);
    }
  }
}
adivinarNumero();