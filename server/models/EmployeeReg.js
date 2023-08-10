const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmployeeRegistration =new Schema({
    first_name:{
        type:String,
      
    },
    last_name:{
        type:String,
        default:""
    },
    mobile_no:{
        type:Number,

    },
    cnic:{
        type:String,
        
    },
    gender:{
        type:String,
  
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
    },
    photo:{
        type:String,
    },
    photo2:{
        type:String,
    }

},{timestamps:true})

module.exports = mongoose.model("EmployeeRegistration",EmployeeRegistration)