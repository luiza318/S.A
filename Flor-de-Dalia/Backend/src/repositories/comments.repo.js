const db = require ("../config/db");

async function findById(id) {
    const [rows] = await db.query(" SELECT id, user_id, text, created_at FROM comments where id = ?", [id]);
    return rows [0];
}

async function createComments(user_id,text) {
    const [result] = await db.query("INSERT INTO comments (user_id, text) VALUES (?, ?)", [user_id,text])
    return result.insertId
}

async function findAll() {
    const [rows] = await db.query(
        "SELECT id, user_id, text, created_at FROM comments ORDER BY id DESC"
    );
    return rows;
}

async function findByUserId(userId) {
    const [rows] = await db.query(
        "SELECT * FROM comments WHERE user_id = ? ORDER BY id DESC",
        [userId]
    );
    return rows;
}

async function findByProductsId(productId) {
    const [rows] = await db.query(
        "SELECT * FROM comments WHERE products_id = ? ORDER BY id DESC",
        [productId]
    );
    return rows;
}

async function commentUpdate(id, text) {
    await db.query(
        "UPDATE  comments SET text = ? WHERE  id = ?",
    [text, id]
    );
}

module.exports = {createComments, findById, findAll, findByUserId, commentUpdate, findByProductsId}

