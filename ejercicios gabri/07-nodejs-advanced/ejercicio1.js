
function procesoSincrono(callback) {
    console.log("Iniciando proceso síncrono...");
    // Simulando una operación que toma tiempo
    setTimeout(() => {
      console.log("Operación completa.");
      callback();
    }, 2000);
  }
  
  console.log("Antes de iniciar el proceso.");
  procesoSincrono(() => {
    console.log("Proceso completado.");
  });
  console.log("Después de iniciar el proceso.");