const express=require('express')
const router=express.Router()
const {addProduct, getProduct, updateProduct, featuredProduct, lessPrice, moreRating}=require('../controller/product.controller')
const fetchuser = require('../middleware/fetchuser')

router.post('/add',fetchuser,addProduct)
router.get('/',fetchuser,getProduct)
router.put('/:id',fetchuser,updateProduct)
router.get('/featured',fetchuser,featuredProduct)
router.get('/price/:limit',fetchuser,lessPrice)
router.get('/rating/:limit',fetchuser,moreRating)

module.exports=router