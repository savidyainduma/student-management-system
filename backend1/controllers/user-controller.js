const express = require("express");
router = express.Router();
const jwt = require("jsonwebtoken");

const service = require('../models/services/user-services');
const bcrypt = require("bcrypt");
const session = require("express-session");

router.post("/signup", async (req, res) => {
    try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(req.body.password.toString(),salt);

        const requestBody = {
          full_name: req.body.name,
          email: req.body.email,
          password:hashedPassword
        };
        const result = await service.addUser(requestBody);
  
      return res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "An Error occured", error: error.message });
    }
  });


  router.post("/login", async (req,res) => {
    try{
      console.log("Request Body:", req.body);
      const {email, password} = req.body;
      const user = await service.loginUser(email,password);

      req.session.user = {
        id: user.id,
        email: user.email,
      };
      console.log("Session Created:", req.session.user);
      const id = user.id;
      const token = jwt.sign({id}, "jwtSecret", {
        expiresIn: 1000*60*60*24,
      })

      return res.status(200).json({
        message: "Login successful",
        user,
        auth:true,
        token:token,
        
      });
    } 
    catch (error){
      return res.status(401).json({
        message:"Login failed",
        error:error.message,
        autth: false
      });
    }
  });

  module.exports = router;