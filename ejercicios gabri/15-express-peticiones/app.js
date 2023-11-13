// Importar los módulos de ESM
import express from 'express';
import bodyParser from 'body-parser';

// Crear la aplicación Express
const server = express();

// Configurar middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar '/header'
server.get('/header', (req, res) => {
  const { token } = req.headers;

  if (!token) {
    const unauthorizedResponse = {
      code: 401,
      error: "Unauthorized",
      message: "Error: Set a token to login"
    };
    res.status(401).json(unauthorizedResponse);
    return;
  }

  // Imprimir el token por consola
  console.log("Token:", token);

  // Puedes realizar otras acciones con el token si es necesario

  // Responder con éxito si el token está presente
  res.status(200).send('Token received and processed successfully.');
});

// Ruta para manejar '/params'
server.get('/params/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).send(`Hola ${name}`);
});

// Ruta para manejar '/query'
server.get('/query', (req, res) => {
  let { n } = req.query;

  // Asignar un valor predeterminado de 100 si n no se define
  if (!n) {
    n = 100;
  }

  if (isNaN(n)) {
    res.status(400).send('Error: El parámetro "n" debe ser un número válido.');
    return;
  }

  const number = parseInt(n);
  const sum = (number * (number + 1)) / 2; // Fórmula para la suma de los primeros n números

  res.status(200).send(`La suma de los números desde 1 hasta ${number} es ${sum}`);
});

// Ruta para manejar '/body'
server.post('/body', (req, res) => {
  // Imprimir todo el objeto entrante en una lista HTML
  const htmlList = `<ul>${Object.entries(req.body).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}</ul>`;
  
  res.status(200).send(htmlList);
});

// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});