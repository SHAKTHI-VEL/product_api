const Product=require('../models/Product')

const addProduct=async(req,res)=>{
    try {
        const product=new Product(req.body)
        const savedProduct=await product.save()
        return res.status(200).json({success:true,savedProduct,message:"New product added"})
    } catch (error) {
        return res.status(500).send({success:false,message: 'Internal server error' });
    }
}

const getProduct=async(req,res)=>{
    try {
        const product=await Product.find()
        return res.status(200).json({success:true,product})
    } catch (error) {
        return res.status(500).send({success:false,message: 'Internal server error' });
    }
}

const updateProduct=async(req,res)=>{
    try {
        const prodId=req.params.id

        if(!(await Product.findOne({productId:prodId}))){
            return res.status(400).json({success:false,message: 'Item not found'})
        }

        const {productId,name,price,featured,rating,company,createdAt}=req.body
        
        let product=await Product.updateOne({productId:prodId},{$set:{productId,name,price,featured,rating,company,createdAt}},{new:true})
        return res.status(200).json({success:true,product,message: 'Product Updated Successfully'});
    } catch (error) {
        return res.status(500).send({success:false,message: 'Internal server error'});
    }
}

const featuredProduct=async(req,res)=>{
    try {
        const featuredProducts=await Product.find({featured:true})
        return res.status(200).json({success:true,featuredProducts})
    } catch (error) {
        return res.status(500).send({success:false,message: 'Internal server error'});
    }
}

const lessPrice=async(req,res)=>{
    try {
        const pricelimit=req.params.limit
        const limitProducts=await Product.find({price:{$lte:pricelimit}})
        return res.status(200).json({success:true,limitProducts})
    } catch (error) {
        return res.status(500).send({success:false,message: 'Internal server error'});
    }
}

const moreRating=async(req,res)=>{
    try {
        const ratinglimit=req.params.limit
        const limitProducts=await Product.find({rating:{$gte:ratinglimit}})
        return res.status(200).json({success:true,limitProducts})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success:false,message: 'Internal server error'});
    }
}

module.exports={addProduct,getProduct,updateProduct,featuredProduct,lessPrice,moreRating}