const express = require("express");
const db = require("./config/db");
const routes = require("./routes/gameRouter");
const logger = require("./middlewares/logger");


const app = express();

app.use(logger);

app.use(express.json());

app.use("/", routes);


module.exports = app;
