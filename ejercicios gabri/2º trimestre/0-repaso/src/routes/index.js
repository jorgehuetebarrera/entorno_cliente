import express from 'express';
import noteRouter from './notes.js';
import { pingController, adminAccessController } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';

const router = express.Router();

router.get('/ping', pingController);
router.get('/admin', validateAdminMiddleware, adminAccessController);
router.use('/notes', noteRouter); // Cambio aquí para establecer "/notes" como la ruta principal

export default router;