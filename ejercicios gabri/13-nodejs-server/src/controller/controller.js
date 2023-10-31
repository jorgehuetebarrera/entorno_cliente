export function pingController(req, res) {
  res.statusCode = 418;
  res.setHeader('Content Type', 'text/html');
  return res.end('<h1>Request accepted</h1>');
}
export function jsonController(req, res) {
  res.statusCode = 200;
  res.setHeader('Content Type', 'aplication/json');
  const resObject = {
    message: 'hello world',
  };
  return res.end(JSON.stringify(resObject));
}

export function notFoundController(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Not Found </h1>');
}
