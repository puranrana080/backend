const Sequelize = require('sequelize')
const sequelize = require('../util/database')



const Expense = sequelize.define('expense', {
    amount: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = Expense