import { hashPassword, comparePasswords } from '../security/auth/authHelper.js';
import { generateToken } from '../security/auth/jwt.js';
import { getUser } from './notes-controller.js';

export async function registerController(req, res) {
  try {
    const { username, password } = req.body;

    // Validaciones de entrada
    if (!username || !password) {
      return res.status(400).json({ error: 'Los campos de usuario y contraseña son obligatorios' });
    }

    // Aquí podrías hacer más validaciones según tus requisitos

    const hashedPassword = await hashPassword(password);

    // Guardar el usuario en la base de datos (si aplicable)

    res.json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export async function loginController(req, res) {
  try {
    const { username, password } = req.body;

    // Validaciones de entrada
    if (!username || !password) {
      return res.status(400).json({ error: 'Los campos de usuario y contraseña son obligatorios' });
    }

    // Aquí podrías hacer más validaciones según tus requisitos

    const user = getUser(username); // Supongamos que tienes una función para obtener un usuario por nombre de usuario

    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const isPasswordValid = await comparePasswords(password, user.hashedPassword);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = generateToken({ username: user.username });

    res.json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}