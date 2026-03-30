const db = require("../config/db");

async function list() {
    const [rows] = await db.query(
        "SELECT * FROM products",
    );
    return rows;
}

async function findById(product_id) {
    const [rows] = await db.query(
        "SELECT * FROM products WHERE id = ?",
        [product_id]
    );
    return rows[0];  // retorna só um produto
}

async function listByCategory(category_id) {
    const [rows] = await db.query(
        "SELECT * FROM products WHERE category_id = ?",
        [category_id]
    );
    return rows;
}

module.exports = { list, findById, listByCategory};