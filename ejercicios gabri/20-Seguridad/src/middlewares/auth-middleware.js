// auth-middleware.js

import jwt from 'jsonwebtoken';
import { secretKey } from '../config/keys.js';

const validarTokenMiddleware = (req, res, next) => {
  // Obtén el token desde la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Desencripta el token con jwt
    const decodedToken = jwt.verify(token, secretKey);

    // Verifica si el mensaje original es "I know your secret"
    if (decodedToken.mensaje === 'I know your secret') {
      // Agrega la información del usuario (incluyendo el rol) al objeto req
      req.user = decodedToken;

      // Si todas las verificaciones pasan, puedes continuar con la solicitud
      next();
    } else {
      return res.status(401).json({ mensaje: 'Acceso no autorizado. Mensaje incorrecto.' });
    }
  } catch (error) {
    return res.status(401).json({ mensaje: 'Acceso no autorizado. Token inválido.' });
  }
};

export default validarTokenMiddleware;