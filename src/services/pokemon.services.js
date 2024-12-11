const db = require('../models/pokemon.model')

class PokemonService {

    createPokemon(data){
        const newPokemon = {
            ...data,
            createdAt: new Date()
        }
        db.push(newPokemon);
        return newPokemon;
    };

    getAllPokemons(){
        return db
    }
}

module.exports = new PokemonService();