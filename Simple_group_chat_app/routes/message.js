const express=require('express')
const router=express.Router()
const data=[]
router.get('/',(req,res,next)=>{
    const messageItem=data.join(' ')
    
    res.send(
    
        `${messageItem}
        <form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
        method="POST">
        <input type="text" id="message" name="message" placeholder="message">
        <input id="username" name="username" type="hidden">
        <button type="submit">Send</button>
        `
    )
     })

router.post('/',(req,res,next)=>{
   data.push(`${req.body.username}:${req.body.message}`)
    console.log(data)
    console.log(`${req.body.username}:${req.body.message}`)
    res.redirect('/')
})

module.exports=router;