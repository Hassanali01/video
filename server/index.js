const express = require('express')
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const app = express()
const Employee = require('./routes/EmployeeReg')
const cors = require('cors')
app.use(cors())

app.use(express.json())

require('dotenv').config()
app.use('/api/employee',Employee)
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connection successfull")).catch((err)=>console.log(err))

app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`app is listen on port ${process.env.PORT}`)
})