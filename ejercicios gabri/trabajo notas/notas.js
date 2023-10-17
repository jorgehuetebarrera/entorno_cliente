import fs from 'node:fs/promises';
import readline from 'node:readline';
import yargs from 'yargs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function showMenu() {
    try {
        const option = await askQuestion('1. Crear nueva nota\n2. Editar nota existente\n3. Eliminar nota\nSelecciona una opción: ');

        switch (option) {
            case '1':
                await createNote();
                break;
            case '2':
                await editNote();
                break;
            case '3':
                await deleteNote();
                break;
            default:
                console.log('Opción no válida');
                showMenu();
                break;
        }
    } catch (error) {
        console.error('Error:', error);
        rl.close();
    }
}

const argv = yargs
    .command('create', 'Crear una nueva nota', (yargs) => {
    }, (argv) => {
        createNote();
    })
    .command('edit', 'Editar una nota existente', (yargs) => {
    }, (argv) => {
        editNote();
    })
    .command('delete', 'Eliminar una nota', (yargs) => {
    }, (argv) => {
        deleteNote();
    })
    .help().argv;

async function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function createNote() {
    try {
        const name = await askQuestion('Introduce el nombre de la nota: ');
        let content = '';
        console.log('Introduce el contenido de la nota, escribe dos líneas en blanco para terminar:');

        rl.on('line', async (input) => {
            if (input.trim() === '' && content.split('\n').pop().trim() === '') {
                await fs.writeFile(`${name}.note`, content);
                console.log('Nota creada');
                rl.removeAllListeners('line');
                showMenu();
            } else {
                content += input + '\n';
            }
        });
    } catch (error) {
        console.error('Error:', error);
        rl.close();
    }
}

async function editNote() {
    try {
        const files = await fs.readdir('./');
        const notes = files.filter(f => f.endsWith('.note'));

        if (notes.length === 0) {
            console.log('No hay notas disponibles para editar.');
            showMenu();
        } else {
            notes.forEach((note, index) => {
                console.log(`${index + 1}. ${note}`);
            });

            const num = await askQuestion('Selecciona una nota para editar: ');
            const noteName = notes[num - 1];

            if (!noteName) {
                console.log('Selección no válida.');
                editNote();
            } else {
                const content = await fs.readFile(noteName, 'utf8');
                console.log('Contenido actual de la nota:\n', content);
                console.log('Escribe el nuevo contenido, escribe dos líneas en blanco para terminar:');
                let newContent = '';

                rl.on('line', async (input) => {
                    if (input.trim() === '' && newContent.split('\n').pop().trim() === '') {
                        await fs.writeFile(noteName, newContent);
                        console.log('Nota actualizada');
                        rl.removeAllListeners('line');
                        showMenu();
                    } else {
                        newContent += input + '\n';
                    }
                });
            }
        }
    } catch (error) {
        console.error('Error:', error);
        rl.close();
    }
}

async function deleteNote() {
    try {
        const files = await fs.readdir('./');
        const notes = files.filter(f => f.endsWith('.note'));

        if (notes.length === 0) {
            console.log('No hay notas disponibles para eliminar.');
            showMenu();
        } else {
            notes.forEach((note, index) => {
                console.log(`${index + 1}. ${note}`);
            });

            const num = await askQuestion('Selecciona una nota para eliminar: ');
            const noteName = notes[num - 1];

            if (!noteName) {
                console.log('Selección no válida.');
                deleteNote();
            } else {
                await fs.unlink(noteName);
                console.log('Nota eliminada');
                showMenu();
            }
        }
    } catch (error) {
        console.error('Error:', error);
        rl.close();
    }
}

if (argv._[0]) {
    if (argv._[0] === 'create') {
        createNote();
    } else if (argv._[0] === 'edit') {
        editNote();
    } else if (argv._[0] === 'delete') {
        deleteNote();
    } else {
        console.log('Comando no válido. Utiliza "create", "edit" o "delete".');
        rl.close();
    }
} else {
    showMenu();
}