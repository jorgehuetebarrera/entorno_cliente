import { createNote, editNote, deleteNote } from '../controllers/note-controller.js';

export function pingController(req, res) {
  res.send('pong');
}

export function adminAccessController(req, res) {
  res.status(200).send('Bienvenid@, disfrute del contenido');
}