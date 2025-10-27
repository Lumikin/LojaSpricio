const express = require('express')
const router = express.Router()

//referencia do arquivo de rotas
const { produtoRoutes } = require('./produtoRoutes');
const { clienteRoutes } = require('./clienteRoutes');


router.use('/', clienteRoutes);
router.use('/', produtoRoutes);

module.exports = { router }