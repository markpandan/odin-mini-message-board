const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static("./public"));

const newMessageRoute = require("./routes/NewMessageRoute");
app.use("/new", newMessageRoute);

const homeRoute = require("./routes/HomeRoute");
app.use("/", homeRoute);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
