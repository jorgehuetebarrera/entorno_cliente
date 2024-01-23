import { Router } from 'express';
import { createAnimal, getAnimals, updateAnimal,deletedAnimal } from '../controllers/animal-controller.js';

const router = Router();

router.get('/', getAnimals)
router.post('/', createAnimal);
router.patch('/:id', updateAnimal);
router.delete('/:id', deletedAnimal)

export default router;
