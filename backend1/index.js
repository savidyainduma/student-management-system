const express = require("express");
const sequelize = require('./models/sequelize'); 
const Student = require('./models/Student'); 
const User = require('./models/User')
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");



const app = express();
app.use(express.json());
app.use(cors({
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  key:"userId",
  secret:"subscribe",
  resave:false,
  saveUninitialized:false,
  cookie:{
    expires: 1000*60*60*24,
  }
})); 



const verifyJWT = (req,res,next) =>{
  const token  = req.headers["authorization"]
  
  if(!token){
    res.send("Token Missing!");
  } else {
    jwt.verify(token.split(' ')[1], "jwtSecret", (err,decoded) =>{
      console.log("Error occured", err)
      if(err) {
        res.json({auth: false, message: "Failed to authenticate."});
      } else {
        req.userId = decoded.id;
        next();
      }
    })
  }
}
module.exports = {verifyJWT};

app.get("/isUserAuth", verifyJWT, (req,res) => {
  res.send("You are authenticated...");
  console.log("authenticated successfully.");
})

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
