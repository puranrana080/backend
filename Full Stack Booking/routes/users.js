const express = require('express')

const router = express.Router()

const User = require('../models/users')

const userController=require('../controller/user')



router.get('/', userController.getForm)

router.post('/add-user',userController.postAddUser )

router.get('/get-users',userController.getUser )

router.delete('/delete/:id',userController.deleteUser )



module.exports = router