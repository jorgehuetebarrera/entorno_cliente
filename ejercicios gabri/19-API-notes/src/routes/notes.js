import express from 'express';
import { createNoteController, editNoteController, deleteNoteController } from '../controllers/notes-controller.js';

const router = express.Router();

router.post('/create', createNoteController);
router.put('/edit/:noteName', editNoteController);
router.delete('/delete/:noteName', deleteNoteController);

export default router;