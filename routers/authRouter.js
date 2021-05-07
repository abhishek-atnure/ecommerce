const authRouter = require("express").Router();
const queries = require("../queries");
const authorization = require("../middlewares/authorization");

authRouter.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server eerror");
    res.end();
  }
});

authRouter.get("/dashboard", authorization, queries.dashboard);

module.exports = authRouter;
