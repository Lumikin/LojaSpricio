const { produtoModel } = require('../models/produtoModel');


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
            const id = Number(req.params.idProduto)
            if (!id || !Number.isInteger(id)) {
                res.status(400).json({ Message: 'Forneça um indentificador (ID) valido' })
            }
            const resultadoId = await produtoModel.selecionarPorId(id);
            res.status(200).json({ Message: 'Resultado dos dados listados', data: resultadoId })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    },

    /**
     * Cria novo item na base de dados
     * @param {Request} req  Objeto da requisição HTTP
     * @param {Response} res  Objeto da resposta HTTP
     * @function incluirProduto
     * @returns {Promise<Object>} Retorna objeto contendo as informações sobre o resultado do insert
     */

    incluirProduto: async (req, res) => {
        try {
            const { descricao, valor } = req.body;
            if (!descricao || descricao.length < 3 || valor <= 0) {
                return res.status(400).json({ message: 'Dados Invalidos' })
            }
            const resultado = await produtoModel.inserirProduto(descricao, valor);
            if (resultado.affectedRows === 1 && resultado.insertId != 0) {
                res.status(201).json({ message: 'Registro incluido com sucesso', result: resultado })
            } else {
                throw new Error('ocorreu um erro ao incluir o registro')
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ Message: 'Ocorreu um erro no servidor.', errorMessage: error.message })
        }
    },
    atualizarProduto: async (req, res) => {
        try {
            const idProduto = Number(req.params.idProduto) // <= validacao para numeral
            let { descricao, valor } = req.body
            descricao = descricao.trim();
            if (!idProduto || !descricao || !valor || typeof idProduto !== 'number' || !isNaN(descricao) || isNaN(valor) || descricao.trim().length < 3) {
                return res.status(400).json({ message: "Verifique os dados enviados e tente novamente!" });
            }
            const produtoAtual = await produtoModel.selecionarPorId(idProduto)
            if (produtoAtual.length === 0) {
                throw new Error("Registro não localizado");
            }

            const novaDescricao = descricao.trim() ?? produtoAtual[0].descricao;
            const novoValor = valor ?? produtoAtual[0].valor;
            const resultado = await produtoModel.alterarProduto(idProduto, novaDescricao, novoValor);
            if (resultado.changedRows === 0) {
                throw new Error("Ocorreu um erro ao atualizar o produto");

            }
            return res.status(200).json({ message: "Registro atualizado com sucesso", data: resultado })
        } catch (error) {
            console.error(error)
            res.status(500).json({ Message: 'Ocorreu um erro no servidor.', errorMessage: error.message })
        }

    },
    excluirProduto: async (req, res) => {
        try {
            const id = number(req.params.idProduto)
            if (!id || !Number.isInteger(id)) {
                return req.status(400).json({ message: "Forneça um ID valido!" })
            }
            const consulta = await produtoModel.selecionarPorId(id);
            if (consulta.length === 0) {
                throw new Error("Registro não localizado");

            }
            else {
                const resultado = await produtoModel.deleteProduto(id);
                if (affectedRows === 1) {
                    res.status(201).json({ message: "Produto excluido com sucesso ", data: resultado })
                }
                else{
                    throw new Error("Não foi possivel excluir o produto");
                    
                }
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ Message: 'Ocorreu um erro no servidor.', errorMessage: error.message })
        }
    }

};


module.exports = { produtoController }