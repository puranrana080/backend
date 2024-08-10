const express=require('express')

const app=express()
app.use((req,res,next)=>{
    console.log("I am in the middleware")
    next()// allow the request to continue to the next middleware
})
app.use((req,res,next)=>{
    console.log("I am in next Middleware")
    res.send('<h1>Welcome to Express</h1>')
    
})


app.listen(3000)