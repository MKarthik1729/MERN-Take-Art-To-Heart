const express = require('express')
const Router = express.Router();
const userRegister = require('../database/userRegisterModel')

Router.post('/register',async (req,res)=>{
userRegister.create(req.body)
  .then((data)=>{
    // resolve(data);
    res.send(data)
  }).catch((err)=>{
res.send('Error') 
console.log(err)
 })
    // res.send('working fine')
})
Router.post('/login',async(req,res)=>{
    const result = await userRegister.findOne({useremail:req.body.useremail,password:req.body.password})
    console.log(result)
    res.send({
        id : result._id,
        username : result.username
    })
})

module.exports = Router