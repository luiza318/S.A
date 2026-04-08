const repo = require("../repositories/comments.repo");

async function create(req, res, next) {
    try{
        const {text} = req.body;
        const id = await repo.createComments(req.user.id, text);
       
        if(req.files && req.files.length > 0){
            for ( let file of req.files){
                const url = `/uploads/${file.filename}`;
                await repo.insertImage(id,url);
            }
        } 

        const comment = await repo.findById(id);
        res.status(201).json(comment);
    }catch(e) {next(e);}
}

async function list(req, res, next) {
    try{
        const comments = await repo.findAll();

        for (let comment of comments) {
            const images = await repo.findImagesByComment(comment.id);
            comment.images = images;
        }

        res.json(comments)
    } catch(e) { next (e); }
}

async function listByUser(req, res, next) {
    try{
        const { userId } = req.params; 
        const comments = await repo.findByUserId(userId);

        for (let comment of comments) {
            const images = await repo.findImagesByComment(comment.id);
            comment.images = images;
        }

        res.json(comments);
    } catch(e) { next (e)}
}

async function listByProduct(req, res, next) {
    try{
        const {productId} = req.params;
        const comments = await repo.findByProductsId(productId);

        for (let comment of comments) {
            const images = await repo.findImagesByComment(comment.id);
            comment.images = images;
        }

        res.json(comments);
    } catch (e) {next (e)}
}


async function update(req, res, next) {
    try{
        const {id} = req.params
        const {text} = req.body;
        await repo.commentUpdate(id, text);
        
        if(req.files && req.files.length > 0){

            await repo.deleteImages(id)

            for ( let file of req.files){
            const url = `/uploads/${file.filename}`;
            await repo.insertImage(id,url);
    }
} 
        const comment = await repo.findById(id);

        res.json(comment)
    }catch(e) {next (e)}
}

async function remove(req, res, next) {
    try{
        const {id} = req.params
        const images = await repo.findImagesByComment(id) || [];

        for( let img of images){
            const filePath = path.join(__dirname, "..", img.url);

            if (fs.existsSync(filePath)){
                fs.unlinkSync(filePath);
            }
        }

        await repo.deleteImages(id);
        await repo.deleteComment(id);

        res.json({message:"Comentário e/ou imagens deletadas com Sucesso"});
    } catch (e) { next (e)}
}


module.exports = {create, list, listByUser, update, listByProduct, remove}