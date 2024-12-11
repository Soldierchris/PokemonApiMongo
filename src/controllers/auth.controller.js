
get = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "desde controlador de auth"
        }
    })
}

module.exports = {
    get
};




/*
// En routes/user.routes.js
router.get('/users', UserController.getAllUsers);        // Obtener usuarios
router.post('/users', UserController.createUser);        // Crear usuario
router.get('/users/:id', UserController.getUserById);    // Obtener usuario específico
router.put('/users/:id', UserController.updateUser);     // Actualizar usuario
router.delete('/users/:id', UserController.deleteUser);  // Eliminar usuario
*/