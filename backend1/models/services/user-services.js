const User = require('../User');
const bcrypt = require("bcrypt");

module.exports.addUser = async (userData) => {
    return await User.create(userData);
  };
 
module.exports.loginUser = async(email,password) => {
  try{
    const user = await User.findOne({where: {email}});
    if(!user){
      throw new Error("User not found for this email.")
    }

    console.log("User retrieved:", user);
    console.log("Password provided:", password);

    if (!password || !user.password) {
      throw new Error('Password is missing or invalid');
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid) {
      throw new Error("Passord incorrect!")
      
    }

    return {
      full_name: user.full_name,
      email: user.email,
      
    };
  } catch (error) {
    throw new Error (error.message);
  }
}