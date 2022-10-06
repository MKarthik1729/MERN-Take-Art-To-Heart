const mongoose = require('mongoose')

mongoose.connect(process.env.Mongo_URL,(e)=>{
    console.log('connected succesfully')
})

module.exports = {
    mongoose
}