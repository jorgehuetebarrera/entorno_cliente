import * as controllers from './controller/controller.js';

export const routes = {
  ping: controllers.pingController,
  json: controllers.jsonController,
  notFound: controllers.notFoundController,
};

export const defaultRoute = (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', '/notFound');
  return res.end('<h1>Redirect</h1>');
};
