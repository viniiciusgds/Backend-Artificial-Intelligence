require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(
  "/images",
  express.static(path.resolve(__dirname, "..", "tmp", "images"))
);
app.use(cors());
app.use(routes);

app.listen(process.env.PORT);
