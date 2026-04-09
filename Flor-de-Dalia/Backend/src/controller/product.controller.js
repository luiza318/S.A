const repo = require("../repositories/product.repo");

async function list(req, res, next) {
    try {
        const products = await repo.list();
        res.json (products);
    }catch (e) { next(e); }
}

async function findById(req, res, next) {
    try {
        const product = await repo.findById(req.params.id);
        res.json (product);
    }catch (e) { next(e); }
}

async function listByCategory(req, res, next) {
    try {
        const products = await repo.listByCategory(req.params.id);
        res.json (products);
    }catch (e) { next(e); }
}

async function create(req, res, next) {
    try{
        const products = await repo.create();
        res.status(201).json({ products });
    }catch (e) { next(e); }
}

async function atualizacaoProduct(req, res, next) {
    try{
        const products = await repo.atualizacaoProduct();
        res.json (products);
    }catch (e) { next(e); }
}

module.exports = {list, findById, listByCategory, create, atualizacaoProduct};