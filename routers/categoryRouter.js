const categoryRouter = require("express").Router();
const queries = require("../queries");

categoryRouter.get("/", queries.getAllCategory);
//get products by category
categoryRouter.get("/:category_id", queries.getProductsByCategory);

module.exports = categoryRouter;
