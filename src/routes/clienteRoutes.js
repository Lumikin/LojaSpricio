const express = require('express')
const clienteRoutes = express.Router()
const { clienteController } = require('../controllers/clienteControllers');

clienteRoutes.get('/clientes/', clienteController.selecionarTodosClientes)
clienteRoutes.post('/clientes/', clienteController.adicionarCliente)
module.exports = { clienteRoutes };