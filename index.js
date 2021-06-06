const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");


require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}


app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const apiRouter = require("./routers/api");
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`connnected to port ${PORT}`);
});
