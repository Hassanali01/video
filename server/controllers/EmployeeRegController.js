const EmployeeRegistration = require('../models/EmployeeReg')
const mongoose = require('mongoose')
//for register employee

const EmployeeReg = async(req,res)=>{
    const {first_name,last_name,cnic,gender,mobile_no,email,address,blood_group,age,dob,country,state,city} = req.body
    try{
        console.log("employeee")
        const Employee = await EmployeeRegistration.create({first_name,last_name,cnic,gender,mobile_no,email,address,blood_group,age,dob,country,state,city})
        res.status(200).json(Employee)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

// for getting all employees

const AllEmployee = async(req,res)=>{
    try{
        const getEmployee = await EmployeeRegistration.find({}).sort({createdAt:-1})
        res.status(200).json(getEmployee)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//for getting single employee

const singleEmployee = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json("something went wrong")
    }
   
    const Employee = await EmployeeRegistration.findById({_id:id})
       if(!Employee){
        return res.status(400).json({error:"No such Employee"})
       }
       res.status(200).json(Employee)
    
}

//for update employee

const updateEmployee = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"No Such Employee"})
    }
     const Employee = await EmployeeRegistration.findByIdAndUpdate({_id:id},{
        $set : {...req.body},
     })
     if (!Employee){
        return res.status(400).json({error:"No Such Employee"})
     }
     res.status(200).json(Employee)

}

//for delete employee

// const deleteEmployee = async(req,res)=>{
//     const {id}= req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(400).json({error:"No Such Employee"})
//     }
//     const Employee = await EmployeeRegistration.findByIdAndDelete({_id:id})
//     if (!Employee){
//         return res.status(400).json({error:"No Such Employee"})
//     }
//     res.status(200).json(Employee)
// }

const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid Employee ID" });
        }

        const employee = await EmployeeRegistration.findByIdAndDelete({_id:id});

        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {EmployeeReg,AllEmployee,singleEmployee,updateEmployee,deleteEmployee}