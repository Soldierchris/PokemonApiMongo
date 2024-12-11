
const pokemonService = require('../services/pokemon.services')


create = (req, res) => {
    pokemonService.createPokemon(req.body)
    res.status(201).json({ status: 'sucess' })
}

get = (req, res) => {
    const pokemons = pokemonService.getAllPokemons()
    res.status  (200).json({
        status: 'sucess',
        data: {
            pokemons
        }
    })
}

getList = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}

put = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}

deletePoke = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}

module.exports = {
    get,
    create,
    getList,
    deletePoke,
    put
};

/*
create = (req, res) => {
    res.status(201).json({
        status: 'sucess',
        data: {
            message: "[Yo creo un pokemon]"
        }
    })
}


get = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}


getList = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}


put = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}

deletePoke = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}


module.exports = {
    create,
    getList,
    deletePoke,
    put,
    get
}*/