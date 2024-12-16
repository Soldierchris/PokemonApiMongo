/*
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
*/
class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async register(req, res) {
        try {
            const { username, password } = req.body;
            const user = await this.authService.register(username, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const result = await this.authService.login(username, password);
            res.json(result);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = AuthController;