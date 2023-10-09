import * as fs from 'node:fs';

const nombreArchivo = 'ficheroprueba.txt';

try {
  const contenido = fs.readFileSync(nombreArchivo, 'utf8');
  console.log('Contenido del archivo:');
  console.log(contenido);
} catch (error) {
  console.error('Error al leer el archivo:', error);
}