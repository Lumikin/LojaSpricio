const express = require('express')
const clienteRoutes = express.Router()
const { clienteController } = require('../controllers/clienteControllers');

clienteRoutes.get('/clientes/', clienteController.SelecionarTodosClientes)

module.exports = { clienteRoutes };