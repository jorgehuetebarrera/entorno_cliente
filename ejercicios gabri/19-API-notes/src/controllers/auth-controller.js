import fs from 'fs/promises';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secretKey = 'croqueta'; // Asegúrate de cambiar esto y usar un secreto más seguro en un entorno real

export async function loginController(req, res) {
  try {
    // Puedes omitir la validación de usuario y contraseña si solo deseas generar un token de manera automática.
     const { username, password } = req.body;

    // Aquí podrías hacer más validaciones según tus requisitos

    // En lugar de verificar el usuario y contraseña, simplemente genera un token.
     const hashedPassword = await hashPassword(password);

    // Guardar el usuario en la base de datos (si aplicable)

    const token = generateToken({ /* Aquí puedes incluir cualquier información adicional que desees en el payload */ });

    res.json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Funciones auxiliares para la autenticación
async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}