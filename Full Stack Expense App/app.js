const express=require('express')
const path=require('path')
const cors=require('cors')



const Sequelize=require('./util/database')


const expenseRoutes=require('./routes/expense')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.static(path.join(__dirname,"public")))


app.use('/home',expenseRoutes)



Sequelize.sync()
.then(result=>{
    app.listen(3000)
    console.log("Inside Sync()")
})
.catch(err=>{
    console.log(err)
})
