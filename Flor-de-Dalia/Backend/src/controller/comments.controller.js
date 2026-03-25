const repo = require("../repositories/comments.repo");
const {hashPassword} = require("../utils/password");

async function create(req, res, next) {
    try{
        const {text} = req.body;
        const id = await repo.createComments(req.user.id, text);
        const comment = await repo.findById(id);
        res.status(201).json(comment);
    }catch(e) {next(e);}
}

async function list(req, res, next) {
    try{
        const comment = await repo.findAll();;
        res.json(comment)
    } catch(e) { next (e); }
}

module.exports = {create, list}



/* listar comentarios
exports.list = (req, res) => {
    res.json(comments);
};

// deletar comentario
exports.delete = (req, res) => {
    const { id } = req.params;
    comments = comments.filter(comment => comment.id != (id));
    res.json({ message: "Comentario deletado com sucesso" });
};

// atualizar comentario
exports.update = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    const comment = comments.find(comment => comment.id == (id));
    if (!comment) {
        return res.status(404).json({ message: "Comentario não encontrado" });
    }

    comment.text = text;
    res.json(comment);
}; */