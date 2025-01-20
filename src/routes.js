const express = require('express');
const userRoutes = require('./routes/user.js');

const router = express.Router();

// Rota de exemplo
router.use('/users', userRoutes);

module.exports = router;
