const mongoose=require('mongoose')
const {Schema}=mongoose

const productSchema=new Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:mongoose.Types.Decimal128
    },
    createdAt:{
        type:Date,
        required:true
    },
    company:{
        type:String,
        required:true
    }
})

const Product=mongoose.model('product',productSchema)

module.exports=Product