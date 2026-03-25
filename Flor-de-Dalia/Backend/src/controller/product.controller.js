const repo = require("../repositories/product.repo");

async function list(req, res, next) {
    try {
        const products = await repo.list();
        res.json (products);
    }catch (e) { next(e); }
}

async function findById(req, res, next) {
    try {
        const product_id = await repo.findById(req.params.id);
        res.json (product_id);
    }catch (e) { next(e); }
}

async function listByCategory(req, res, next) {
    try {
        const category_id = await repo.listByCategory(req.params.id);
        res.json (category_id);
    }catch (e) { next(e); }
}

async function create(req, res, next) {
    try{
        const products = await repo.create();
        res.status(201).json({ products });
    }catch (e) { next(e); }
}

//terminar rotas de put, delete, create

module.exports = {list, findById, listByCategory, create};