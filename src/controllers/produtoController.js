const { produtoModel } = require('../models/produtoModel')
const produtoController = {

    buscarTodosProdutos: async (req, res) => {
        /**
         * Retorna os produtos cadastrados no banco de dados 
         *  Rota: GET /produtos
         * @async
         * @function buscarTodosProdutos
         * @param {*} req Objeto de manipulação HTTP
         * @param {*} res Objeto de resposta HTTP
         * @returns {Promise<Array<<object>>} Conteudo com os dados da requisição
         */

        try {
            const resultado = await produtoModel.selecionarTodos();
            if (resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela não contém dados' })

            }
            res.status(200).json({ message: 'Resultado dos dados listados', data: resultado })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    },
    buscarProdutoId: async (req, res) => {
        try {
            const id = req.params.idProduto
            if (!id || !Number.isInteger(id)) {
                response.status(400).json({ Message: 'Forneça um indentificador (ID) valido' })
            }
            const resultadoId = await produtoModel.selecionarPorId(id);
            res.status(200).json({ Message: 'Resultados dos dados listados', data: resultadoId })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    }
};


export { produtoController }