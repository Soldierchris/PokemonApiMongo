const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

// Proxy de solicitudes a otro servidor
app.use('/api', proxy({ target: 'http://otro-servidor.com', changeOrigin: true }));

app.listen(3000, () => {
    console.log('Servidor Proxy corriendo en http://localhost:3000');
});

//En algunos casos, puedes usar Node.js para crear un servidor proxy o reverse proxy, que actúa como intermediario entre los clientes y otros servidores backend. Esto puede ser útil para redirigir las solicitudes a diferentes servicios o para realizar balanceo de carga.
//Este tipo de servidor es útil en arquitecturas más complejas donde se tienen múltiples microservicios.
