const express = require("express");
const { list, findById, listByCategory} =  require("../controller/product.controller");
const router = express.Router();

router.get("/", list);
router.get("/:id", findById);
router.get("/category/:id", listByCategory);

module.exports = router;