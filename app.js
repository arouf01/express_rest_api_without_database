const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const usersRouter = require("./routes/userRoutes");

// App use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/users", usersRouter);

// Home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

// 404 URLs
app.use((req, res) => {
  res.status(404).json({
    message: "404 Invalid URL",
  });
});

module.exports = app;
