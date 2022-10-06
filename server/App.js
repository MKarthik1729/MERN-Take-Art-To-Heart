const express = require('express')
const BodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const cors = require('cors')
const UserRouter = require('./user/user')


dotenv.config();
const app = express()
const port = process.env.PORT || 8080

mongoose.connect(process.env.Mongo_URL,(e)=>{
    console.log('connected succesfully')
})

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(
	cors({
		origin: ["http://localhost:3000"],
	})
);

app.use('/user',UserRouter)

//listening
setTimeout(
    ()=>app.listen(port,(e)=>{
        console.log(`listening to port ${port}`)
    }),1000)