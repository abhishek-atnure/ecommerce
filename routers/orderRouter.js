const orderRouter = require("express").Router();
const queries = require("../queries");

orderRouter.get("/:user_id", queries.getAllOrders);

module.exports = orderRouter;
