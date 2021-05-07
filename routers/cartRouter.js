const cartRouter = require("express").Router();
const queries = require("../queries");

cartRouter.post("/", queries.addingProductsToCart);
//display current cart
cartRouter.get("/:cart_id", queries.gettingCartById);
//update current cart
cartRouter.put("/", queries.changeQuantity);
//delete whole cart
cartRouter.delete("/:cart_id", queries.deleteCart);
//single product remove
cartRouter.delete("/", queries.deleteProduct);
//checkout page to buy
cartRouter.post("/:cart_id/checkout", queries.checkout);

module.exports = cartRouter;
