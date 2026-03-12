const validateComment = (req, res, next) => {

    const { text } = req.body;

    // verifica se existe comentario
    if (!text) {
        return res.status(400).json({
            message: "O comentário é obrigatório"
        });
    }

    // verifica o tamanho minimo
    if (text.length < 3) {
        return res.status(400).json({
            message: "O comentário deve conter no mínimo 3 caracteres"
        });
    }

    // verifica o tamanho maximo
    if (text.length > 300) {
        return res.status(400).json({
            message: "O comentário deve conter no máximo 300 caracteres"
        });
    }

    next();
};

module.exports = validateComment;