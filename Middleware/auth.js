//middleware
const jwt = require("jsonwebtoken")
const auth = async (req,res,next)=>{
    try 
    {
        const token = req.header("auth")
        const verifyUser = await jwt.verify(token,process.env.SEC)
        if(!verifyUser)
        {
            res.status(400).json({message:"Invalid Token"})
        }
        next();

    } 
    catch (error) 
    {
       res.status(400).json({messagge:error.message}) 
    }
}


module.exports = auth


// const route = require("express").Router() 