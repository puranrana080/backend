//const path=require('path')
const express=require('express')
const router=express.Router()
const contactController=require('../controllers/contactus')
//const rootDir=require('../util/path')




router.get('/', contactController.getContact)


router.post('/success',contactController.getSuccess)

module.exports=router;