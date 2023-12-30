const User=require('../models/User')

const signup=async(req,res)=>{
    try {
        const {email}=req.body
        let user=await User.findOne({email})
        if(user){
            return res.status(400).json({success:false,message:"Sorry a user with this email exist"})
        }
        else{
            const newUser=new User(req.body)
            let createdUser=await newUser.save()
            const token=createdUser.generateAccessToken()
            return res.status(200).json({success:true,token,message:"User successfully signed up"})
        }

    } catch (error) {
        return res.status(500).send({success:false, message: 'Internal server error' });
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        let user=await User.findOne({email})
        if(!user){
            return res.status(401).json({success:false,message:"User does not exist"})
        }
        if(user){
            const isMatch=await user.isPasswordCorrect(password)
            if(isMatch){
                const token=user.generateAccessToken()
                return res.status(200).json({success:true,token:token,message:"Login Successful"})
            }
            else{
                return res.status(401).json({success:false,message:"Password not matching"})
            }
        }
    } catch (error) {
        return res.status(500).send({success:false,message: 'Internal server error' });
    }
}

module.exports={signup,login}