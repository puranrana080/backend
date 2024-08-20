const Expense = require('../models/expense')
const path = require('path')


exports.getForm = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
}


exports.postGetExpense = async (req, res, next) => {
    try {
        const expense = await Expense.create({
            amount: req.body.amount,
            description: req.body.description,
            category: req.body.category
        })
        res.status(201).json({ expenseData: expense })


    } catch (err) {
        console.error("Error adding expense", err)
        res.status(500).json({ message: "Expense not added " })
    }
}

exports.getGetExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findAll()

        res.status(200).json({ allExpense: expense })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed " })
    }
}

exports.deleteExpense = async (req, res, next) => {
    try {
        const userId = req.params.Id
        Expense.destroy({ where: { id: userId } })
        res.status(200).json({ message: "Deleted" })
    }
    catch (error) {
        console.log(error)
    }
}