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

module.exports = {createComments, findById, findAll}

