function restaDesdeObjeto(obj) {
    if (typeof obj === 'object' && 'bien' in obj && 'mal' in obj) {
      const resultado = obj.bien - obj.mal;
      return resultado;
    } else {
      return "Entrada inválida: el objeto debe tener propiedades 'bien' y 'mal'.";
    }
  }
  
  // Ejemplo de uso:
  const objetoEjemplo = { bien: 10, mal: 5 };
  const resultadoResta = restaDesdeObjeto(objetoEjemplo);
  console.log(resultadoResta);