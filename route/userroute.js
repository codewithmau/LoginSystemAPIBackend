const{createUser,getUser,putUser} = require("../controller/usercontroller")
const router = require("express").Router();
const{ login } = require("../controller/loginController")
const auth = require("../Middleware/auth")

router.post("/insert", async (req,res)=>{
    try {
        const result = await createUser(req.body)
        if(result.errors)
        {
            res.status(400).json({errors:true,message:result.message})
     }
        res.status(200).json({errors:false,data:result.data})
        
    } catch (error) {
        res.status(400).json({errors:true,message:error.message})
    }
})

router.get("/get" ,auth, async (req,res)=>{
    try 
    {
        const result = await getUser()
        if(result.errors)
        {
            res.status(400).json({errors:true,message:result.message})
        }
        res.status(200).json({errors:false,data:result.data})
        
    }
     catch (error) 
    {
       res.status(400).json({errors:true,message:error.message})
    }
})

router.put("/put/:id", async (req,res) =>{
    try 
    {
        const id = req.params.id
        const result = await putUser(id,req.body)
        if(result.errors)
            {
                res.status(400).json({errors:true,data:result.message})
            
            } 
            res.status(200).json({errors:false,data:result.data})

        }
    catch (error)
     {
        res.status(400).json({errors:true,message:error.message})
            
    }
})


router.post("/login", async (req,res)=>{
    try {
        const result = await login(req.body)
        if(result.errors)
        {
            res.status(400).json({errors:true,message:result.message})
     }
        res.status(200).json({errors:false,data:result.data})
        
    } catch (error) {
        res.status(400).json({errors:true,message:error.message})
    }
})
module.exports = router;
