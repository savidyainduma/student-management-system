const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());

mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student-management",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(3001, "127.0.0.1", () => {
  console.log("listning...");
});
