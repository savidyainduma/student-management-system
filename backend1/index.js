const express = require("express");
const sequelize = require('./models/sequelize'); 
const Student = require('./models/Student'); 
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


const studentRoutes = require('./controllers/student.controller');
app.use("/api/students", studentRoutes);

sequelize.sync()
  .then(() => {
    console.log("Database synced");
    app.listen(3001, () => console.log("Server started on port 3001")); 
  })
  .catch(err => console.log("Failed to sync database: ", err));
