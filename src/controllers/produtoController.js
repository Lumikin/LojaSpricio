const { produtoModel } = require('../models/produtoModel')
const produtoController = {
    /**
             * Retorna os produtos cadastrados no banco de dados 
             *  Rota: GET /produtos
             * @async
             * @function buscarTodosProdutos
             * @param {*} req Objeto de manipulação HTTP
             * @param {*} res Objeto de resposta HTTP
             * @returns {Promise<Array<<object>>} Conteudo com os dados da requisição
             */
    buscarTodosProdutos: async (req, res) => {


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
    /**
     * Retorna o produto referente ao id_produto pesquisado
     * Rota: GET /Produtos/:idProduto
     * @async
     * @function buscarProdutoId 
     * @param {Request} req Objeto da Requisição HTTP
     * @param {Response} res Objeto da resposta HTTP
     * @returns {Promise<Array<Object>>} Retorna objeto contendo os dados do produto pesquisado
     */
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