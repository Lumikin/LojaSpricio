const pool = require('../config/db');
// clienteModel
const clienteModel = {

    //Selecionar todos os clientes
    selecionarTodos: async () => {
        const sql = 'SELECT * FROM clientes;';
        const [rows] = await pool.query(sql)
        return rows;
    },

    //Adicionar um cliente
    inserirCliente: async (nome, cpf) => {
        const sql = 'INSERT INTO clientes (nomeCliente, cpfCliente) VALUES (?,?);';
        const values = [nome, cpf];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },
    verificarCPF: async (consultarCPF) =>{
        const sql = 'SELECT * FROM clientes WHERE cpfClientes=?;';
        const values = [consultarCPF];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    }
    

}

module.exports = { clienteModel }
