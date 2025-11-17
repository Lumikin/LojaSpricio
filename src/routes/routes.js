const express = require('express')
const router = express.Router()

//referencia do arquivo de rotas
const { produtoRoutes } = require('./produtoRoutes');
const { clienteRoutes } = require('./clienteRoutes');
const { pedidoRoutes } = require('./pedidoRoutes')


router.use('/', clienteRoutes);
router.use('/', produtoRoutes);
router.use('/', pedidoRoutes);

module.exports = { router }