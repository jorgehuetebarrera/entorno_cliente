import express from 'express';
import router from '../routes/index.js';
import { morganMiddleware } from '../config/morgan.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';
import { printDateMiddleware } from '../middlewares/misc-middleware.js';
import SwaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json'  assert { type: "json" };

export default function (server){
	// CONFIG
	server.use(express.json());
	server.use(express.urlencoded());
	// MDW
	server.use(morganMiddleware);
	server.use(printDateMiddleware);
	// RUTAS
	server.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
	server.use(router);
	
	// ERRORS
	server.use(errorMiddleware);
	
}
