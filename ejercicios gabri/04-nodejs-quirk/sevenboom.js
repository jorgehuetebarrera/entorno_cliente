function tieneSiete(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].toString().includes('7')) {
        return "Boom!";
      }
    }
    return "no hay 7 en el array";
  }
  
 
  const numeros = [123, 456, 777, 888];
  const resultado = tieneSiete(numeros);
  console.log(resultado); 