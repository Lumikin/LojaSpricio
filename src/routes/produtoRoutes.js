const express = require('express')
const produtoRoutes = express.Router()

const { produtoController } = require('../controllers/produtoController');

produtoRoutes.get('/produtos', produtoController.buscarTodosProdutos);
produtoRoutes.get('/produtos/:idProduto', produtoController.buscarProdutoId);
produtoRoutes.post('/produtos', produtoController.incluirProduto);






module.exports = { produtoRoutes };