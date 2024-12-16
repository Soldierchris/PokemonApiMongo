const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ error: 'No se proporcionó token de autorización' });
        }

        const decoded = jwt.verify(token, 'your-secret-key');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = authMiddleware;

/*
const Joi = require('joi')

const pokeSchema =  Joi.object({
    name: Joi.string().min(3).max(20).required()
})


exports.validatePokemon = (req, res, next) => {
    const { error } = pokeSchema.validate(req.body);

    if(error){
        return res.status(400).json({
            status: "error",
            message: error.details[0].message
        })
    }
    next();
}*/