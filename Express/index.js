const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})
app.listen(3000)


/*admin js file
const express=require('express')
const router=express.Router()

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" placeholder="size" name="size"><button type="submit" >Submit</button></form>')
})

router.use('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/shop')
})

module.exports=router;

shop.js file
********************************************************
const express=require('express')
const router=express.Router()




router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Express</h1>')
})

module.exports=router;




*/