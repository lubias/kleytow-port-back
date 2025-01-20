const express = require('express');
const db = require('../middleware/connectDB');

const router = express.Router();

// Rota para listar todos os usuários
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários');
    }
});

module.exports = router;