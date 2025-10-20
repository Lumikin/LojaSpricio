const { produtoModel } = require('../models/produtoModel')
const produtoController = {

    buscarTodosProdutos: async (req, res) => {
        try {
            const resultado = await produtoModel.selecionarTodos();
            if(resultado.length === 0){
                return res.status(200).json({ message: 'A tabela não contém dados'})

            }
            res.status(200).json({message: 'Resultado dos dados listados', data: resultado })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    }
};

export { produtoController }