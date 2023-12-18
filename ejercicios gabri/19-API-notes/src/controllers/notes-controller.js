import fs from 'fs/promises';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




const secretKey = 'croqueta'; // Asegúrate de cambiar esto y usar un secreto más seguro en un entorno real

export async function notesController(req, res) {
  try {
    // Obtén la lista de notas, por ejemplo, leyendo el contenido de la carpeta "./notes"
    const files = await fs.readdir('./notes');

    // Renderiza un menú con enlaces a las operaciones CRUD para cada nota
    const menu = files.map((file) => `<li><a href="/notes/edit/${file}">Editar ${file}</a> | <a href="/notes/delete/${file}">Borrar ${file}</a></li>`).join('');

    const response = `
      <h1>Menú de Notas</h1>
      <ul>
        ${menu}
      </ul>
      <p><form action="/notes" method="post">
        <input type="text" name="name" placeholder="Nombre de la nota" required>
        <textarea name="content" placeholder="Contenido de la nota" required></textarea>
        <button type="submit">Crear Nota</button>
      </form></p>
    `;

    res.send(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
export async function getNoteInfo(noteName) {
  try {
    const noteContent = await fs.readFile(`./notes/${noteName}`, 'utf-8');
    return { noteContent };
  } catch (error) {
    throw new Error('No se pudo obtener la información de la nota.');
  }
}
export async function viewNoteController(req, res) {
  try {
    const { noteName } = req.params;
    const noteContent = await fs.readFile(`./notes/${noteName}`, 'utf-8');
    res.json({ noteContent });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createNoteController(req, res) {
  const { name, content } = req.body;
  console.log('Name:', name);
  console.log('Content:', content);
  try {
    await fs.writeFile(`./notes/${name}.note`, content);
    res.json({ message: 'Nota creada' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
export async function editNoteController(req, res) {
  const { noteName } = req.params;
  const { newContent } = req.body;
  try {
    await fs.writeFile(`./notes/${noteName}`, newContent);
    res.json({ message: 'Nota actualizada' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deleteNoteController(req, res) {
  const { noteName } = req.params;
  try {
    await fs.unlink(`./notes/${noteName}`);
    res.json({ message: 'Nota eliminada' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function loginController(req, res) {
  try {
    // No necesitas validar un nombre de usuario y contraseña aquí, ya que quieres generar un token sin autenticación real.
    // Simplemente genera un token basado en algún dato, como la fecha actual.

    const token = generateToken({ someData: 'whatever' });

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
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expira en 1 hora, puedes ajustar esto según tus necesidades
}
