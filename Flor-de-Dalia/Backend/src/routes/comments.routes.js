const express = require("express");
const router = express.Router();

const commentsController = require("../controller/comments.controller");
const validateComment = require("../middlewares/comments.middleware");
const { authRequired } = require("../middlewares/auth.middleware");

router.post("/", authRequired, validateComment, commentsController.create);

router.get("/", commentsController.list);

router.delete("/:id", authRequired, commentsController.delete);

router.put("/:id", authRequired, validateComment, commentsController.update);

module.exports = router;