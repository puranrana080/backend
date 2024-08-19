const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const User=sequelize.define('user',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        primarykey:true

}
,    email:{type:Sequelize.STRING,
        unique:true
    },
    phonenumber:{
        type:Sequelize.STRING,
        unique:true
    }
})

module.exports=User