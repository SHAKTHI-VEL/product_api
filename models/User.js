const mongoose=require('mongoose')
const {Schema}=mongoose
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

require('dotenv').config()

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10)
        next()
    }  
    else
        return next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    return  jwt.sign(
        {
            _id:this._id
        },
        process.env.ACCESS_TOKEN_SECRET
    )
}


const User=mongoose.model('user',userSchema)
module.exports=User