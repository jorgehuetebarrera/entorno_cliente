import * as fs from 'node:fs';
import * as readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    rl.question('1. Crear nueva nota\n2. Editar nota existente\n3. Eliminar nota\nSelecciona una opción: ', (option) => {
        switch(option) {
            case '1':
                createNote();
                break;
            case '2':
                editNote();
                break;
            case '3':
                deleteNote();
                break;
            default:
                console.log('Opción no válida');
                showMenu();
                break;
        }
    });
}

function createNote() {
    rl.question('Introduce el nombre de la nota: ', (name) => {
        let content = '';
        console.log('Introduce el contenido de la nota, escribe dos líneas en blanco para terminar:');
        rl.on('line', (input) => {
            if (input.trim() === '' && content.split('\n').pop().trim() === '') {
                // Se detectaron dos líneas en blanco, terminar la edición
                fs.writeFile(`${name}.note`, content, (err) => {
                    if(err) throw err;
                    console.log('Nota creada');
                    rl.removeAllListeners('line');  // Importante: quitar el listener para evitar duplicados
                    showMenu();  // Regresar al menú principal
                });
            } else {
                content += input + '\n';  // Añadir la línea al contenido
            }
        });
    });
}

function editNote() {
    fs.readdir('./', (err, files) => {
        if (err) throw err;
        const notes = files.filter(f => f.endsWith('.note'));
        if (notes.length === 0) {
            console.log('No hay notas disponibles para editar.');
            showMenu();
        } else {
            notes.forEach((note, index) => {
                console.log(`${index + 1}. ${note}`);
            });
            rl.question('Selecciona una nota para editar: ', (num) => {
                const noteName = notes[num - 1];
                if (!noteName) {
                    console.log('Selección no válida.');
                    editNote();
                } else {
                    fs.readFile(noteName, 'utf8', (err, content) => {
                        if (err) throw err;
                        console.log('Contenido actual de la nota:\n', content);
                        console.log('Escribe el nuevo contenido, escribe dos líneas en blanco para terminar:');
                        let newContent = '';
                        rl.on('line', (input) => {
                            if (input.trim() === '' && newContent.split('\n').pop().trim() === '') {
                                fs.writeFile(noteName, newContent, (err) => {
                                    if (err) throw err;
                                    console.log('Nota actualizada');
                                    rl.removeAllListeners('line');
                                    showMenu();
                                });
                            } else {
                                newContent += input + '\n';
                            }
                        });
                    });
                }
            });
        }
    });
}

function deleteNote() {
    fs.readdir('./', (err, files) => {
        if (err) throw err;
        const notes = files.filter(f => f.endsWith('.note'));
        if (notes.length === 0) {
            console.log('No hay notas disponibles para eliminar.');
            showMenu();
        } else {
            notes.forEach((note, index) => {
                console.log(`${index + 1}. ${note}`);
            });
            rl.question('Selecciona una nota para eliminar: ', (num) => {
                const noteName = notes[num - 1];
                if (!noteName) {
                    console.log('Selección no válida.');
                    deleteNote();
                } else {
                    fs.unlink(noteName, (err) => {
                        if (err) throw err;
                        console.log('Nota eliminada');
                        showMenu();
                    });
                }
            });
        }
    });
}

showMenu();
