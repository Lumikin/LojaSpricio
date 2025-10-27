const pool = require('../config/db');
/**
     * Seleciona todos os produtos cadastrados na tabela
     * @async
     * @function selecionarTodos
     * @returns Retorna o resltado com um array de objetos, cada objeto representa um resistro da tabela
     * @example
     * const produtos = await produtoModel.selecionarTodos();
     * console.log(produtos)
     * //Saida esperada
     * [
     *  {id_produto: 1, descricao: 'teclado', valor 150,00},
     *  {id_produto: 2, descricao: 'Mouse', valor 399,00},
     * ]
     * 
     */

const produtoModel = {

    //select todos os produtos

    selecionarTodos: async () => {
        const sql = 'SELECT * FROM produtos;';
        const [rows] = await pool.query(sql)
        return rows;
    },

    /**
     * Seleciona um produto de acordo com o id_produto especificado
     * 
     * @async
     * @param {number} pID Indentificador que deve ser pesquisado no banco de dados  
     * @returns {promece<Array<Object>>}
     * @example
     * const produto = await produtoModel.selecionarPorId(1);
     * console.log(produto);
     * // Saída
     * [
     *  {id_produto: 1, descricao: 'teclado', valor 150,00}
     * ]
     */

    selecionarPorId: async (pID) => {
        const sql = 'SELECT * FROM produtos WHERE id_produto = ?;';
        const values = [pID]
        const [rows] = await pool.query(sql, values)
        return rows;
    },

    /**
      * @async
      * @param {String} pDescricao
      * @param {number} pValores 
      * @returns {Promise<object>} Restorna um objeto contendo propriedades que representas as informações do comando executado
      * @example
      *  const produtos = await produtoModel.inserirProduto('Produto teste', 16.99);
      * //saida
      * "result": {
      *      "fieldCount": 0,
      *      "affectedRows": 1,
      *      "insetID" : 11,
      *      "info": "",
      *      "serverStatus": 2,
      *      "warningStatus": 0,
      *      "changedRows": 0
      * }
      */

    inserirProduto: async (pDescricao, pValores) => {
        const sql = 'INSERT INTO produtos (descricao, valor) VALUES (?,?);';
        const values = [pDescricao, pValores];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },
    /**
     * @async
     * @param {String} pID
     * @param {String} pDescricao
     * @param {number} pValores 
     * @returns {Promise<object>} Restorna um objeto contendo propriedades que representas as informações do comando executado
     * @example
     *  const produtos = await produtoModel.inserirProduto(1,'Produto teste', 16.99);
     * //saida
     * "result": {
     *      "fieldCount": 0,
     *      "affectedRows": 1,
     *      "insetID" : 0,
     *      "info": "",
     *      "serverStatus": 2,
     *      "warningStatus": 0,
     *      "changedRows": 1
     * }
     */

    alterarProduto: async (pId, pDescricao, pValores) => { // <= tem que ser na forma como esta sendo chamada!
        const sql = 'UPDATE produtos SET descricao=?, valor=? WHERE id_produto=?;';
        const values = [pDescricao, pValores, pId];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },

    deleteProduto: async (pID) => {
        const sql = 'DELETE FROM produtos WHERE id+produto = ?;';
        const values = [pID];
        const [rows] = await pool.query(sql, values)
        return rows;
    }

}
module.exports = { produtoModel }