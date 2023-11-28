import { printDateMiddleware, validateAdminMiddleware } from '../middlewares/misc-middleware.js';

describe('Misc Middleware Tests', () => {
  test('printDateMiddleware should log date and request info', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const req = { method: 'GET', path: '/test' };
    const next = jest.fn();

    printDateMiddleware(req, {}, next);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[<date>] GET: /test'));
    expect(next).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  test('validateAdminMiddleware should allow access with correct password', () => {
    const req = { headers: { password: 'patata' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    validateAdminMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test('validateAdminMiddleware should deny access with incorrect password', () => {
    const req = { headers: { password: 'incorrect' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    validateAdminMiddleware(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición" });
  });
});
