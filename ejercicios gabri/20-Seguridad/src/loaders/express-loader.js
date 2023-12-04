import express from "express";
import router from '../routes/index.js';
import { printDateMiddleware } from "../middlewares/misc-middleware.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import { morganMiddleware } from "../config/morgan.js";
import validarTokenMiddleware from "../middlewares/auth-middleware.js"; // Importa el middleware de validación de token

export default function (server){
  // CONFIG
  server.use(express.json());
  server.use(express.urlencoded());

  // MDW
  server.use(morganMiddleware);
  server.use(printDateMiddleware);

  // Middleware de validación de token
  server.use(validarTokenMiddleware);

  // RUTAS
  server.use(router);

  // ERRORS
  server.use(errorMiddleware);
}