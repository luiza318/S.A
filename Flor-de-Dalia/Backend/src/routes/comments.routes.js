const express = require("express");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router();

const commentsController = require("../controller/comments.controller");
const validateComment = require("../middlewares/comments.middleware");
const { authRequired } = require("../middlewares/auth.middleware");

router.post("/", authRequired,upload.array("images", 3), validateComment, commentsController.create);
router.get("/", commentsController.list);
router.get("/user/:userId", commentsController.listByUser);
router.get("/products/:productId", commentsController.listByProduct)
router.put("/:id", authRequired, validateComment, commentsController.update);
router.delete("/:id", authRequired, commentsController.remove);

module.exports = router;
