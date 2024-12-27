/*
const express = require('express')
const router = express.Router();
const authController =  require('./../controllers/auth.controller')

router.get("/", authController.get)

module.exports = router;
*/
//app.use('/auth', require('../routes/auth.routes')(authController));

const express = require('express');

function authRoutes(authController) {
    const router = express.Router();

    // Envolver los métodos del controlador en funciones de middleware
    router.post('/register', (req, res) => authController.register(req, res));
    router.post('/login', (req, res) => authController.login(req, res));

    return router;
}

module.exports = authRoutes;
