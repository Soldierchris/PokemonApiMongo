const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde Express!');
});

app.listen(3000, () => {
    console.log('Servidor Express corriendo en http://localhost:3000');
});

//Express.js es un framework popular para Node.js que facilita la creación de servidores HTTP más complejos y robustos. Es ampliamente utilizado para construir APIs RESTful, aplicaciones web dinámicas, y más.
//Express facilita el manejo de rutas, middleware, solicitudes POST, PUT, DELETE, y mucho más. Es ideal para aplicaciones web y APIs de mayor complejidad.

