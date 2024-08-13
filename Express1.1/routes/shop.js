
//const path=require('path')
const express=require('express')
const router=express.Router()
const productController=require('../controllers/products')
//const rootDir=require('../util/path')




router.get('/',productController.getShopProduct )

module.exports=router;