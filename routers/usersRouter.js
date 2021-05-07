const usersRouter = require("express").Router();
const validInfo = require("../middlewares/validInfo");
const queries = require("../queries");

usersRouter.post("/register", validInfo, queries.register);

usersRouter.post("/login", validInfo, queries.login);

usersRouter.patch("/:id", queries.updateExistingUser);

module.exports = usersRouter;
