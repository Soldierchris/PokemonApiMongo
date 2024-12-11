const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
    socket.emit('mensaje', 'Hola desde el servidor');
});

server.listen(3000, () => {
    console.log('Servidor en tiempo real corriendo en http://localhost:3000');
});

//Usando Socket.io o WebSockets, puedes crear servidores que permiten la interacción en tiempo real entre el cliente y el servidor. Este tipo de servidores son ideales para aplicaciones que requieren actualizaciones constantes, como chats en vivo, transmisiones en vivo, o aplicaciones colaborativas.

//Ejemplo básico con socket.io:
