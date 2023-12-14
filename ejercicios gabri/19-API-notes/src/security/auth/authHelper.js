import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}