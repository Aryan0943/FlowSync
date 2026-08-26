const router=require('express').Router();
// const Employee=require('../models/Employee.js');
const {createEmployee,getAllEmployees,getEmployeeById,updateEmployee,deleteEmployee}=require('../controller/employeeController.js');
const authMiddleware=require('../middleware/authMiddleware.js');
const roleMiddleware=require('../middleware/roleMiddleware.js');

router.post('/employees',authMiddleware,roleMiddleware(['admin']),createEmployee);
router.get('/employees',authMiddleware,getAllEmployees);
router.get('/employees/:id',authMiddleware,getEmployeeById);
router.put('/employees/:id',authMiddleware,roleMiddleware(['admin']),updateEmployee);
router.delete('/employees/:id',authMiddleware,roleMiddleware(['admin']),deleteEmployee);
module.exports=router;
