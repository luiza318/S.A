const express = require("express");
const router = express.Router();

const commentsController = require("../controller/comments.controller");
const validateComment = require("../middlewares/comments.middleware");

router.post("/", validateComment, commentsController.create);

router.get("/", commentsController.list);

router.delete("/:id", commentsController.delete);

router.put("/:id", validateComment, commentsController.update);

module.exports = router;