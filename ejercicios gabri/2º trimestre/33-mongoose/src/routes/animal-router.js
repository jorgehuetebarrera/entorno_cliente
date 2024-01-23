import { Router } from 'express';
import { createAnimal } from '../controllers/animal-controller.js';

const router = Router();

router.post('/', createAnimal);

export default router;
