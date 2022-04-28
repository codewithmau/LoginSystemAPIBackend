const userSchema = require("../DB/userDb")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") //jsonwebtoken

exports.login = async (user) => {
try 
  { 
      const users = await userSchema.findOne({email:user.email})
      
      if(!users)
      {
          return {errors:true,message:"Email or Password is invalid"}
      }
      const passwordExist = await bcrypt.compare(user.password,users.password)
      if(!passwordExist)
      {
        return {errors:true,message:"Email or Password is invalid"}
      }
     
      const token = await jwt.sign({_id:users._id},process.env.SEC)
      return {errors:false,data:{token:token,user:users}}
   }
 catch (error)
   {
      return {errors:true,message:error.message} 
   }

}