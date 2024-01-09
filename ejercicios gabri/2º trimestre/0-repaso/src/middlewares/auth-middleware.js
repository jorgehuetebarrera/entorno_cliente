// auth-middleware.js
import jwt from 'jsonwebtoken';
import { secretKey } from '../security/auth/authHelper.js';

export function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    req.user = decoded;
    next();
  });
}
