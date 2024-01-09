import express from 'express';
import noteRouter from './notes.js';

const router = express.Router();

router.use('/notes', noteRouter);

export default router;
