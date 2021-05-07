const express = require("express");
const apiRouter = express.Router();

const authRouter = require("./authRouter");
const cartRouter = require("./cartRouter");
const categoryRouter = require("./categoryRouter");
const orderRouter = require("./orderRouter");
const productRouter = require("./productRouter");
const usersRouter = require("./usersRouter");

apiRouter.use("/category", categoryRouter);
apiRouter.use("/products", productRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/user", usersRouter);
apiRouter.use("/cart", cartRouter);
apiRouter.use("/order", orderRouter);

module.exports = apiRouter;
