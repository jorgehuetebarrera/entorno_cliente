import express from 'express';

const server = express();
const router = express.Router();

/* Middleware */
server.get('/ping', (req, res, next) => {
  console.log(`${req.method}: ${req.pah}`);
  next();
});
/* controller y router */
server.get('/ping', (req, res, next) => {
  console.log('pong');
  res.send('pong');
});

router.get('/user', (req, res) => {
  res.sen({ name: 'Jorge' });
});

server.use(router);

server.listen(3000, () => {
  console.log('Server is ready');
});
