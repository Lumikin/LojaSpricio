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


    inserirProduto: async (pDescrição, pValores) => {
        const sql = 'INSERT INTO produtos (descrição, valor) VALUES (?,?);';
        const values = [pDescrição, pValores]
        const [rows] = await pool.query(sql, values)
        console.log(rows);
        return rows
    } 

}
module.exports = { produtoModel }