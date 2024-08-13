
//const path=require('path')
const express=require('express')
const router=express.Router()

//const rootDir=require('../util/path.js')

const productController=require('../controllers/products.js')

router.get('/add-product', productController.addProduct)

router.use('/add-product',productController.getProduct )

module.exports=router;