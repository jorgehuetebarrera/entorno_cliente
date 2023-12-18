// notes.js
import express from 'express';
import { createNoteController, editNoteController, deleteNoteController, loginController,notesController,viewNoteController } from '../controllers/notes-controller.js';
import { verifyToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/login', loginController);
router.get('/',notesController);
router.get('/:note', verifyToken, viewNoteController);
router.post('/', verifyToken, createNoteController);
router.put('/:noteName', verifyToken, editNoteController);
router.delete('/:noteName', verifyToken, deleteNoteController);

export default router;