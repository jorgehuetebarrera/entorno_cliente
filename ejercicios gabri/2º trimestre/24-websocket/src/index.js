import  app  from './app.js';
import config from './config.js';
import { Server } from 'socket.io';

const { port } = config;

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const io = new Server(server);

io.on('connection', (socket) =>{
    console.log('A user hass connected');
    socket.on('disconnect', () => {
        console.log('A user has disconected');
    });
});

setInterval(() => {
    io.emit('date', new Date)
}, 1000);