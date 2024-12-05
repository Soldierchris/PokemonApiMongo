const express = require('express')
const dotenv = require('dotenv')
const app = express()


app.use(express.json())


app.get('/',(req, res)=>{
    res.send('Hola mundo')   
})

const port = process.env.PORT || 3000;
app.listen (port, ()=>{
    console.log(`Servidor ejecutando con Express desde el puerto ${port}`)
})
