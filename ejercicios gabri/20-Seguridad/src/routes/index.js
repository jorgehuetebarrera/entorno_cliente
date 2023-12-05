// routes/index.js

import express from "express";
import miscController from "../controllers/misc-controller.js";
import usersController from "../controllers/users-controller.js";

const router = express.Router();

// Rutas públicas
router.get("/public", miscController.publicRoute);

// Rutas para usuarios registrados (vip)
router.get("/vip", validarTokenMiddleware, usersController.vipRoute);

// Rutas exclusivas para usuarios con rol admin
router.get("/admin", validarTokenMiddleware, usersController.adminRoute);

export default router;