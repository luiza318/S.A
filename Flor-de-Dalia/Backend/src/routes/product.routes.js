const express = require("express");
const { list, findById, listByCategory} =  require("../controller/product.controller");
const router = express.Router();

router.get("/", list);
router.get("/category/:id", listByCategory);
router.get("/:id", findById);



module.exports = router;