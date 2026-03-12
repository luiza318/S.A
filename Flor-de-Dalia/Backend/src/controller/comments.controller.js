let comments = [];

// criar comentario
exports.create = (req, res) => {
    const { text } = req.body;

    const newComment = {
        id: Date.now(),
        text: text,
        user: req.user ? req.user.id : "anonimo"
    };

    comments.push(newComment);
    res.status(201).json(newComment);
}

// listar comentarios
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
};