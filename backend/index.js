const express = require("express");

app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./db");
require("express-async-errors");

studentRoutes = require("./controllers/student.controller");

app.use("/api/students", studentRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong!");
});

db.query("SELECT 1")
  .then(() => {
    console.log("database connected successfully...");
    app.listen(3001, () => console.log("server started"));
  })
  .catch((err) => console.log("database connection failed. \n" + err));
