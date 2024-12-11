const express = require('express')
const router = express.Router();
const pokemonController =  require('./../controllers/pokemon.controller')
const { validatePokemon } = require('./../middleware/validationPokemon')


router.get("/", pokemonController.get)
router.get("/:id", pokemonController.getList)
router.post("/", validatePokemon,pokemonController.create)
router.put("/:id", pokemonController.put)
router.delete("/:id", pokemonController.deletePoke)

/*
router.get("/", pokeController.getList)
router.get("/:id", pokeController.get)
router.post("/", validatePokemon,  pokeController.create)
router.put("/:id", pokeController.put)
router.delete("/:id", pokeController.deletePoke)
*/

module.exports = router;


/*const express = require('express')
const router = express.Router();
const pokeController =  require('./../controllers/poke.controller')
const { validatePokemon } = require('../middleware/validationPokemon')

router.get("/", pokeController.getList)
router.get("/:id", pokeController.get)
router.post("/", validatePokemon,  pokeController.create)
router.put("/:id", pokeController.put)
router.delete("/:id", pokeController.deletePoke)

module.exports = router;*/