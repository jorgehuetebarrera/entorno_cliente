function fizzBuzz(rango, reglaFizz, reglaBuzz) {
    for (let i = 1; i <= rango; i++) {
      let resultado = '';
  
      if (i % reglaFizz === 0) {
        resultado += 'Fizz';
      }
  
      if (i % reglaBuzz === 0) {
        resultado += 'Buzz';
      }
  
      if (resultado === '') {
        resultado = i;
      }
  
      console.log(resultado);
    }
  }
  fizzBuzz(30, 3, 5);