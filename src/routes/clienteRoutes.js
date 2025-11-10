const express = require('express')
const clienteRoutes = express.Router()
const { clienteController } = require('../controllers/clienteControllers');

clienteRoutes.get('/clientes/', clienteController.selecionarTodosClientes)
clienteRoutes.get('/clientes/:idCliente', clienteController.selecionarCliente)
clienteRoutes.post('/clientes/', clienteController.adicionarCliente)
clienteRoutes.put('/clientes/:idCliente', clienteController.atualizarCliente);
clienteRoutes.delete('/clientes/:idCliente', clienteController.excluirCliente)

module.exports = { clienteRoutes };