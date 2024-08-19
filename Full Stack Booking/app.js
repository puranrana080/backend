const express=require('express')
const path=require('path')
const cors=require('cors')


const sequelize=require('./util/database')


const app=express()
const userRoutes=require('./routes/users')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))






app.use('/user',userRoutes)

sequelize.sync().then(result=>{
    app.listen(3000)
    console.log("inside the sync")
})

.catch(err=>{console.log(err)})




