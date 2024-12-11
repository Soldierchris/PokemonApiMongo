const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Maria' }
];

// Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// Obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.status(201).json(usuario);
});

app.listen(3000, () => {
    console.log('Servidor API RESTful corriendo en http://localhost:3000');
});

//Utilizando Express.js o el módulo http, puedes crear un servidor que sirva una API RESTful, que permite la comunicación entre clientes (como aplicaciones móviles o frontends web) y el servidor usando los métodos HTTP (GET, POST, PUT, DELETE).
//Las APIs RESTful son muy comunes en aplicaciones modernas, especialmente para móviles y aplicaciones SPA (Single Page Applications).
