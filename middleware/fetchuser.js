const jwt=require('jsonwebtoken')

const fetchuser=(req,res,next)=>{
    try {
        const token=req.header('auth-token');
        if(!token){
            return res.status(400).send({success:false,message:"Please authenticate using a valid token"})
        }
        const data=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        if(data){
            next();
        }
        
    } catch (error) {
        return res.status(400).json({success:false,message:"Please authenticate using a valid token"})
    }
}

module.exports=fetchuser