const express = require('express')

const router = express.Router()


const expenseController=require('../controller/expense')


router.get('/',expenseController.getForm)

router.post('/add-expense', expenseController.postGetExpense)

router.get('/get-expense', expenseController.getGetExpense)

router.delete('/delete-expense/:Id',expenseController.deleteExpense )


module.exports =router