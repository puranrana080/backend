
const rootDir = require('../util/path.js')
const path=require('path')

exports.getContact=(req, res, next) => {
    res.sendFile(path.join(rootDir,"views","contact.html"))
}

exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","success.html"))
}