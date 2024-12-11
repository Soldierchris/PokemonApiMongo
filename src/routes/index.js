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


