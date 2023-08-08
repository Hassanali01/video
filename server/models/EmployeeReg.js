const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmployeeRegistration =new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        default:""
    },
    mobile_no:{
        type:Number,
        require:true
    },
    cnic:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        trim:true,
        default:""
    },
    blood_group:{
        type:String,
    },
    cnic:{
        type:String,
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    },
    city:{
        type:String,
    },
    address:{
        type:String,
    },
    age:{
        type:Number,
    },
    dob:{
        type:Date,
    }

},{timestamps:true})

module.exports = mongoose.model("EmployeeRegistration",EmployeeRegistration)