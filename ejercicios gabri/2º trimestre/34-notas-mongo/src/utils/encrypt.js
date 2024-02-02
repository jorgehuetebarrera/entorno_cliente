import bcrypt from 'bcrypt';

export  function encriptPassword(password){
  return bcrypt.hash(password, 10);
}

export function checkHas(text, hash){
  return  bcrypt.compareSync(text, hash);
}
