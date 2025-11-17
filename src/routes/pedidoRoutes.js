const express = require('express')
const pedidoRoutes = express.Router()
const { pedidoController } = require('../controllers/pedidoContreller');

pedidoRoutes.post(
    '/pedidos',
    pedidoController.criarpedido
)

module.exports = { pedidoRoutes }