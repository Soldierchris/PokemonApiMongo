/*
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
*/
class PokemonService {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    getAllPokemons() {
        return this.pokemonRepository.findAll();
    }

    getPokemonById(id) {
        const pokemon = this.pokemonRepository.findById(id);
        if (!pokemon) throw new Error('Pokemon not found');
        return pokemon;
    }

    getTrainerPokemons(trainerId) {
        return this.pokemonRepository.findByTrainerId(trainerId);
    }

    createPokemon(data, trainerId) {
        return this.pokemonRepository.create(
            data.name,
            data.type,
            data.level,
            trainerId
        );
    }

    updatePokemon(id, data, trainerId) {
        const pokemon = this.pokemonRepository.findById(id);
        if (!pokemon) throw new Error('Pokemon not found');
        if (pokemon.trainerId !== trainerId) throw new Error('Unauthorized');
        
        return this.pokemonRepository.update(id, data);
    }

    deletePokemon(id, trainerId) {
        const pokemon = this.pokemonRepository.findById(id);
        if (!pokemon) throw new Error('Pokemon not found');
        if (pokemon.trainerId !== trainerId) throw new Error('Unauthorized');
        
        return this.pokemonRepository.delete(id);
    }
}

module.exports = PokemonService;
