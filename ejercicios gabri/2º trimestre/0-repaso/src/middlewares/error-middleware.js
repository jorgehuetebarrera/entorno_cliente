export function errorMiddleware(err, req, res, next) {
  const { status = 500, message } = err;
  res.status(status).send(status === 500 ? 'Server Error' : message);
}
export function errorMiddleware2(err, req, res, next) {
  console.error(err); // Agrega esta línea para imprimir el error en la consola
  const { status = 500, message } = err;
  res.status(status).send(status === 500 ? 'Server Error' : message);
}
