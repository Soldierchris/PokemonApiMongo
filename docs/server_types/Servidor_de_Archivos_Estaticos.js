const express = require('express');
const app = express();

// Servir archivos estáticos desde una carpeta 'public'
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor de archivos estáticos corriendo en http://localhost:3000');
});

//Node.js también se puede usar para servir archivos estáticos, como HTML, CSS, imágenes, y JavaScript, utilizando Express o el módulo http. Es una solución simple para servir contenido estático sin necesidad de un servidor de producción más complejo como Nginx o Apache.
//Este tipo de servidor es útil cuando deseas servir una aplicación web sencilla o contenido estático sin procesamiento dinámico.
