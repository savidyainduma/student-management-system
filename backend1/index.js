const express = require("express");
const sequelize = require('./models/sequelize'); 
const Student = require('./models/Student'); 
const User = require('./models/User')
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


const studentRoutes = require('./controllers/student-controller');
app.use("/api/students", studentRoutes);

const userRoutes=require('./controllers/user-controller');
app.use("/users", userRoutes);

sequelize.sync()
  .then(() => {
    console.log("Database synced");
    app.listen(3001, () => console.log("Server started on port 3001")); 
  })
  .catch(err => console.log("Failed to sync database: ", err));
