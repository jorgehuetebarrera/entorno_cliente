const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'jorge'; // Reemplaza con tu propia clave secreta

const validarTokenMiddleware = (req, res, next) => {
  // Obtén el token desde la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Desencripta el token con bcrypt
    const decodedToken = jwt.verify(token, secretKey);

    // Verifica si el mensaje original es "I know your secret"
    const mensajeOriginal = bcrypt.compareSync('I know your secret', decodedToken.mensaje);

    if (mensajeOriginal) {
      // Acceso válido, puedes continuar con la solicitud
      next();
    } else {
      return res.status(401).json({ mensaje: 'Acceso no autorizado. Mensaje incorrecto.' });
    }
  } catch (error) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. Token inválido.' });
  }
};

module.exports = validarTokenMiddleware;