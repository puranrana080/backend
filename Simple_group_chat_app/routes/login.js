const express=require('express')
const router=express.Router()


router.get('/login',(req,res,next)=>{
    //res.send('<form action="/profile" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>')
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/product" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>')

})

router.post('/product',(req,res,next)=>{
    
    res.redirect('/')
})

module.exports=router;