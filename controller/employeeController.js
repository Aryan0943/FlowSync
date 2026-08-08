const Employee=require('../models/Employee.js');
const createEmployee=async(req,res)=>{
    try{
        await Employee.create(req.body);
        res.status(201).json({
        message:"Employee created successfully"
        });

    }catch(err){
        res.status(500).json({
            message:"Failed to create employee",
            error:err.message
        });
    }

};
const getAllEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find();
        res.status(200).json({
            message:"Employees fetched successfully",
            data:employees
        });
    }catch(err){
        res.status(500).json({
            message:"Failed to fetch employees",
            error:err.message
        });
    }
};

const getEmployeeById=async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id);
        res.status(200).json({
            message:"Employee fetched successfully",
            data:employee
        })
    }catch(err){
        res.status(500).json({
            message:"Failed to fetch employee",
            error:err.message
        });
    }
};
const updateEmployee=async(req,res)=>{
    try{
        const employee=await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!employee){
            return res.status(404).json({
                message:"Employee not found"
            });
        }
        res.status(200).json({
            message:"Employee updated successfully",
            data:employee
        });
    }catch(err){
        res.status(500).json({
            message:"Failed to update employee",
            error:err.message
        });
    }
};
const deleteEmployee=async(req,res)=>{
    try{
        const employee=await Employee.findByIdAndDelete(req.params.id);
        if(!employee){
            return res.status(404).json({
                message:"Employee not found"
            });
        }
        res.status(200).json({
            message:"Employee deleted successfully"

        });
    }catch(err){
        res.status(500).json({
            message:"Failed to delete employee",
            error:err.message
        });
    }
}
module.exports={createEmployee,getAllEmployees,getEmployeeById,updateEmployee,deleteEmployee};