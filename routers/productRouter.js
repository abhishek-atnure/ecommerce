const productRouter = require("express").Router();
const queries = require("../queries");

productRouter.get("/", queries.getAllProducts);
//get a product
productRouter.get("/:id", queries.getProductById);

module.exports = productRouter;
