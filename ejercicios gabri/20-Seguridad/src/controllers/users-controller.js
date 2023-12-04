export function getUser(req, res) {
  res.send({ 'name': 'Manu' });
}

export function postUser(req, res, next) {
  try {
    throw new Error('Unexpected error');
  } catch (err) {
    next(err);
  }
}