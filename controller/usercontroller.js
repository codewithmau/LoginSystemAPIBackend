const userSchema = require("../DB/userDb")
const bcrypt = require("bcrypt")


//For email or password not repeart
exports.createUser = async (user) =>{
    try {
        const emailExist = await userSchema.findOne({email:user.email})
        if(emailExist)
          {
              return {errors:true,message:"Email already exist"}
          }
        let salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(user.password,salt)
        const users = await new userSchema(
            {
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                password:encryptedPassword
            });
        const data = await users.save()
        return {errors:false,data:data}
       } 
    
    catch (error)
     {
       return {errors:true,message:error.message} 
    }
}

exports.getUser = async () =>{
    try {
        const data = await  userSchema.find();
        return {errors:false,data:data}
        
    } catch (error)
     {
       return {errors:true,message:error.message} 
    }
}

exports.putUser = async (id,user) =>{
    try {
        
        const data = await userSchema.findByIdAndUpdate(id,user,{new:true})
        return {errors:false,data:data}
    } 
    catch (error)
     {
        return {errors:true,message:error.message}
    }
}

exports.deleteuser = async (id,user) =>{
    try 
    {
      await userSchema.findByIdAndDelete(id) 
      return {errors:false,data:"Data deleted successfully..!"} 
    } 
    catch (error)
     {
        return {errors:true,message:error.message}
    }
}

