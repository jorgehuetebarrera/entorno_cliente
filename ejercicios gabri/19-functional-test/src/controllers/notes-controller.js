import fs from 'fs/promises';

export async function createNoteController(req, res) {
  const { name, content } = req.body;
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