//ClienteControllers

const { clienteModel } = require('../models/clienteModel')
const clienteController = {
    SelecionarTodosClientes: async (req, res) => {
        try {
            const resultado = await clienteModel.selecionarTodos();
            if (resultado.length === 0) {
                return res.status(200).json({ message: 'A tabela Clientes não contém registros' })
            }
            res.status(200).json({ message: 'Resultado dos dados listados:', data: resultado })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message })
        }
    },

}

module.exports = { clienteController }