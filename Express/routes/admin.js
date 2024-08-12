
const path=require('path')
const express=require('express')
const router=express.Router()

const rootDir=require('../util/path.js')

router.get('/add-product', (req, res, next) => {
   // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" placeholder="size" name="size"><button type="submit" >Submit</button></form>')
res.sendFile(path.join(rootDir,"views","add-product.html"))

})

router.use('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
})

module.exports=router;