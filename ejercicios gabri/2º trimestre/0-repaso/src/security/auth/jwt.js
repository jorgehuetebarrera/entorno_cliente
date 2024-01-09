import jwt from 'jsonwebtoken';

const secretKey = 'croqueta'; // Deberías almacenar esto de forma segura

export function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return jwt.verify(token, secretKey);
}