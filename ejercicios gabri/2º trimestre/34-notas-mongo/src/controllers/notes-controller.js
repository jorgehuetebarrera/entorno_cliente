import * as notesService from './services/database/notes-db-service.js';

export async function getAllNotes(req, res) {
  try {
    const notes = await getAllNotesFromDB();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener todas las notas' });
  }
}

// Obtener una nota por ID
export async function getNote(req, res) {
  const { id } = req.params;
  try {
    const note = await getNoteByIdFromDB(id);
    if (!note) {
      res.status(404).json({ error: 'Nota no encontrada' });
      return;
    }
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la nota por ID' });
  }
}

// Crear una nueva nota
export async function createNote(req, res) {
  // Obtén los datos de la nota desde req.body
  const { title, content } = req.body;

  try {
    const newNote = await createNoteInDB({ title, content });
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear una nueva nota' });
  }
}

// Actualizar una nota por ID
export async function updateNote(req, res) {
  const { id } = req.params;
  // Obtén los datos actualizados de la nota desde req.body
  const { title, content } = req.body;

  try {
    const updatedNote = await updateNoteInDB(id, { title, content });
    if (!updatedNote) {
      res.status(404).json({ error: 'Nota no encontrada' });
      return;
    }
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la nota por ID' });
  }
}

// Eliminar una nota por ID
export async function deleteNote(req, res) {
  const { id } = req.params;

  try {
    const deletedNote = await deleteNoteFromDB(id);
    if (!deletedNote) {
      res.status(404).json({ error: 'Nota no encontrada' });
      return;
    }
    res.json({ message: 'Nota eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la nota por ID' });
  }
}
