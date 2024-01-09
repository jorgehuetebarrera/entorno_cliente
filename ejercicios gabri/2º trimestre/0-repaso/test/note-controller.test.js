import fs from 'fs/promises';
import { createNoteController, editNoteController, deleteNoteController } from '../controllers/note-controller.js';

jest.mock('fs/promises');

describe('Note Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('createNoteController should create a new note', async () => {
    const req = { body: { name: 'testNote', content: 'Test content' } };
    const res = { json: jest.fn() };

    await createNoteController(req, res);

    expect(fs.writeFile).toHaveBeenCalledWith('./notes/testNote.note', 'Test content');
    expect(res.json).toHaveBeenCalledWith({ message: 'Nota creada' });
  });

  test('editNoteController should edit an existing note', async () => {
    const req = { params: { noteName: 'testNote' }, body: { newContent: 'New content' } };
    const res = { json: jest.fn() };

    await editNoteController(req, res);

    expect(fs.writeFile).toHaveBeenCalledWith('./notes/testNote', 'New content');
    expect(res.json).toHaveBeenCalledWith({ message: 'Nota actualizada' });
  });

  test('deleteNoteController should delete an existing note', async () => {
    const req = { params: { noteName: 'testNote' } };
    const res = { json: jest.fn() };

    await deleteNoteController(req, res);

    expect(fs.unlink).toHaveBeenCalledWith('./notes/testNote');
    expect(res.json).toHaveBeenCalledWith({ message: 'Nota eliminada' });
  });
});
