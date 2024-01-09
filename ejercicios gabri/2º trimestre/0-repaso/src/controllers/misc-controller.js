
import { createNoteController, editNoteController, deleteNoteController } from '../controllers/notes-controller.js';

export function pingController(req, res) {
  res.send('pong');
}

export function adminAccessController(req, res) {
  res.status(200).send('Bienvenid@, disfrute del contenido');
}

export { createNoteController, editNoteController, deleteNoteController };