const path=require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()


const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
const contactRoutes=require('./routes/contact.js')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactUs',contactRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})
app.listen(3000)

