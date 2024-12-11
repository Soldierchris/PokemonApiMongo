const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.send('Bienvenido al servidor WebSocket!');
    ws.on('message', (message) => {
        console.log('Recibido: %s', message);
    });
});

console.log('Servidor WebSocket corriendo en ws://localhost:8080');

//Los servidores WebSocket permiten una comunicación bidireccional y en tiempo real entre el cliente y el servidor. Node.js, junto con bibliotecas como ws o socket.io, facilita la implementación de servidores WebSocket.

//Los servidores WebSocket son ideales para aplicaciones en tiempo real, como chats, juegos multijugador o aplicaciones de seguimiento en vivo.

