const express = require('express')
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const app = express()
const Employee = require('./routes/EmployeeReg')
const cors = require('cors')
// const multer = require('multer');
const bodyParser = require("body-parser")
const path = require('path')
app.use(cors())

app.use(express.json())

require('dotenv').config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
// app.use("/images", express.static(path.join(__dirname, "/images")));

app.use('/api/employee',Employee)
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connection successfull")).catch((err)=>console.log(err))

app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`app is listen on port ${process.env.PORT}`)
})