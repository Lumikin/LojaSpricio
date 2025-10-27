//ClienteControllers

const { clienteModel } = require('../models/clienteModel')
const clienteController = {
    selecionarTodosClientes: async (req, res) => {
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
    adicionarCliente: async (req, res) => {
        //TODO: Arrumar o Verificador de CPF
        //TODO: Ver por que numeral esta sendo recusado!
        try {
            const { nome, cpf } = req.body;
            if (!nome || nome.length < 3 || !String(nome) || !Number(cpf) ||cpf.length != 11) {
                return res.status(400).json({ message: 'Dados invalidos' })
            }
            const consultarCPF = await clienteModel.selecionarTodos()
            if (consultarCPF === cpf) {
                return res.status(409).json({ message: "Cpf já cadastrado!" })

            }
            console.log(consultarCPF)
            const resultado = await clienteModel.inserirCliente(nome, cpf)
            if (resultado.affectedRows === 1 && resultado.insertId != 0) {
                res.status(201).json({ message: 'Registro incluido com sucesso', result: resultado })
            } else {
                throw new Error('ocorreu um erro ao incluir o registro')
            }
            console.log(cpf)
        } catch (error) {
            console.error(error)
            res.status(500).json({ Message: 'Ocorreu um erro no servidor.', errorMessage: error.message })
        }
    }

}

module.exports = { clienteController }