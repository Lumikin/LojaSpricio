const pool = require('../config/db');
const produtoModel = {

    //select todos os produtos
    selecionarTodos: async () => {
        const sql = 'SELECT * FROM produtos;';
        const [rows] = await pool.query(sql)
        return rows;
    },

    selecionarPorId: async (pID) => {
        const sql = 'SELECT * FROM produtos WHERE id_produto = ?;';
        const values = [pID]
        const [rows] = await pool.query(sql, values)
        return rows;
    }


}
module.exports = { produtoModel }