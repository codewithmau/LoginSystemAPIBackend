const mongoose = require ("mongoose")
const express = require("express")
const user = require("./route/userroute")
const app = express()
require ("dotenv/config")

app.use(express.json())

app.get("/", (req,res) => {
res.send("Shrinivas")
})

app.use("/user",user)

app.listen(process.env.PORT || 5555);

mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},() =>{
    console.log("Database Connected Successfully..!");
})
