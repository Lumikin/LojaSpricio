const express = require('express')
const pedidoRoutes = express.Router()
const { pedidoController } = require('../controllers/pedidoContreller');

pedidoRoutes.post(
    '/pedidos',
    pedidoController.criarpedido
)
pedidoRoutes.post(
    '/pedidos/item',
    pedidoController.CriarItem
)

module.exports = { pedidoRoutes }