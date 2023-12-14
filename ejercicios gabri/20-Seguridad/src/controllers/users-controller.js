// controllers/users-controller.js

export const vipRoute = (req, res) => {
  res.json({ mensaje: 'Acceso permitido para usuarios registrados (VIP).' });
};

export const adminRoute = (req, res) => {
  // Verifica el rol del usuario, por ejemplo, desde el token
  const { rol } = req.user; // Asegúrate de tener esta información disponible en tu middleware de autenticación

  if (rol === 'admin') {
    res.json({ mensaje: 'Acceso permitido para usuarios con rol admin.' });
  } else {
    res.status(403).json({ mensaje: 'Acceso denegado. Se requiere rol admin.' });
  }
};