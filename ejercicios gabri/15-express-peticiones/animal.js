// Importar los módulos de ESM
import express from 'express';
import bodyParser from 'body-parser';

// Crear la aplicación Express
const server = express();

// Configurar middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Crear un enrutador para la ruta '/animals'
const animalsRouter = express.Router();

// Endpoint para /animals/dog
animalsRouter.get('/dog', (req, res) => {
  res.status(200).json({ "grow": "guau guau" });
});

// Endpoint para /animals/cat
animalsRouter.get('/cat', (req, res) => {
  res.status(200).json({ "grow": "miau" });
});

// Endpoint para /animals/bird
animalsRouter.get('/bird', (req, res) => {
  res.status(200).json({ "grow": "pio pio" });
});

// Aplicar el enrutador a la ruta '/animals'
server.use('/animals', animalsRouter);

// Ruta para manejar el resto de las rutas
server.use('*', (req, res) => {
  const notFoundResponse = {
    code: 404,
    error: "Not Found",
    message: "Error: Path not found"
  };
  res.status(404).json(notFoundResponse);
});

// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});