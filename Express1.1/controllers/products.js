const path=require('path')
const rootDir = require('../util/path.js')

exports.addProduct = (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" placeholder="size" name="size"><button type="submit" >Submit</button></form>')
    res.sendFile(path.join(rootDir, "views", "add-product.html"))

}

exports.getProduct = (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
}

exports.getShopProduct=(req, res, next) => {
    res.sendFile(path.join(rootDir,"views","shop.html"))
}