const express = require('express')
const router = express.Router()
// const EmployeeRegistration = require('../models/EmployeeReg')
const {EmployeeReg,AllEmployee,singleEmployee,updateEmployee, deleteEmployee} = require('../controllers/EmployeeRegController')

router.post('/',EmployeeReg)
router.get('/all',AllEmployee)
router.get('/:id',singleEmployee)
router.patch('/:id',updateEmployee)
router.delete('/:id',deleteEmployee)

module.exports= router