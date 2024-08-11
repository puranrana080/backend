const express=require('express')
const bodyParser=require('body-parser')
const fs=require('fs')
const app=express()

app.use(bodyParser.urlencoded({extended:false}))
//const data =[]

const loginRoutes=require('./routes/login')
const messageRoutes=require('./routes/message')

app.use(loginRoutes)
app.use(messageRoutes)







app.listen(4000)