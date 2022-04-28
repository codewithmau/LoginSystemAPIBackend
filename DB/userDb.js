const mongoose = require("mongoose")
const userSchema = mongoose.Schema({

    firstname : {type:String,required:true},
    lastname : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    CreatedDate : {type:Date,default:Date.now()},
    UpdatedDate : {type:Date,dafault:Date.now()}
})

module.exports = mongoose.model("user",userSchema)