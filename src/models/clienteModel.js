const pool = require('../config/db');
// clienteModel
const clienteModel = {

    //Selecionar todos os clientes
    selecionarTodos: async () => {
        const sql = 'SELECT * FROM clientes;';
        const [rows] = await pool.query(sql)
        return rows;
    },
    selecionarPorId: async (pID) => {
        const sql = 'SELECT * FROM clientes WHERE idCliente = ?;';
        const values = [pID]
        const [rows] = await pool.query(sql, values)
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
    verificarCPF: async (consultarCPF) => {
        const sql = 'SELECT * FROM clientes WHERE cpfCliente=?;';
        const values = [consultarCPF];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },
    deleteCliente: async (pID) => {
        const sql = 'DELETE FROM clientes WHERE idCliente = ?;';
        const values = [pID];
        const [rows] = await pool.query(sql, values)
        return rows;
    },
    alterarCliente: async (pId, nome, cpf) => { // <= tem que ser na forma como esta sendo chamada!
        const sql = 'UPDATE clientes SET nomeCliente=?, cpfCliente=? WHERE idCliente=?;';
        const values = [nome, cpf, pId];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },


}

module.exports = { clienteModel }
