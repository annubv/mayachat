const express = require("express");
const bp = require("body-parser");
const compress = require("compression");
const logger = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const mainroutes = require(__dirname + "/backend/routes/mainroutes");

const app = express();

/* Middleware Setup */

app.use(express.static(__dirname + "/client/assets/"));

app.use(cors());
app.use(compress());
app.use(logger("dev"));
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(logger("dev"));

app.use("/", mainroutes);
app.engine("html", ejs.renderFile);
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log("\nApp Running");
});

module.exports = app;
