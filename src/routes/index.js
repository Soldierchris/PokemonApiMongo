/*
const express = require('express')
const authRoute = require('../routes/auth.route')
const pokemonRoute = require('../routes/pokemon.route')


const app = express()
app.use(express.json())


app.use('/auth', authRoute)
app.use('/pokemon', pokemonRoute)


app.get('/',(req, res)=>{
    res.send('Hola mundo')   
})

const port = process.env.PORT || 3000;
app.listen (port, ()=>{
    console.log(`Servidor ejecutando con Express desde el puerto ${port}`)
})
*/
const express = require('express');

// Import repositories
const UserRepository = require('../repositories/user.repository');
const PokemonRepository = require('../repositories/pokemon.repository');

// Import services
const AuthService = require('../services/auth.service');
const PokemonService = require('../services/pokemon.service');

// Import controllers
const AuthController = require('../controllers/auth.controller');
const PokemonController = require('../controllers/pokemon.controller');

const app = express();

// Instantiate repositories
const userRepository = new UserRepository();
const pokemonRepository = new PokemonRepository();

// Instantiate services
const authService = new AuthService(userRepository);
const pokemonService = new PokemonService(pokemonRepository);

// Instantiate controllers
const authController = new AuthController(authService);
const pokemonController = new PokemonController(pokemonService);

// Middleware
app.use(express.json());

// Routes
app.use('/auth', require('../routes/auth.routes')(authController));
app.use('/pokemon', require('../routes/pokemon.routes')(pokemonController));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


