const Sequelize =require('sequelize')

const sequelize= new Sequelize('node-complete','root','root5544',
    {dialect:'mysql',
        host:'localhost'
    })

module.exports=sequelize