const path=require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const get404Controller=require('./controllers/error.js')


const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')
const contactRoutes=require('./routes/contact.js')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactUs',contactRoutes)


app.use(get404Controller.get404)
app.listen(3000)

