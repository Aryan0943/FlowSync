const router=require('express').Router();
// const Employee=require('../models/Employee.js');
const {createEmployee,getAllEmployees,getEmployeeById,updateEmployee,deleteEmployee}=require('../controller/employeeController.js');


router.post('/employees',createEmployee);
router.get('/employees',getAllEmployees);
router.get('/employees/:id',getEmployeeById);
router.put('/employees/:id',updateEmployee);
router.delete('/employees/:id',deleteEmployee);
module.exports=router;
