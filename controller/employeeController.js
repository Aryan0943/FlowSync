const Employee=require('../models/Employee.js');
const createEmployee=async(req,res,next)=>{
    try{
       
        await Employee.create(req.body);
        res.status(201).json({
        message:"Employee created successfully"
        });

    }catch(err){
        next(err);
    }

};
const getAllEmployees=async(req,res,next)=>{
    try{
        const {name,department,age,page=1,limit=10}=req.query;
        const filter={};
        
        const currentPage=Number(page);
        const pageLimit=Number(limit);
        if (!Number.isInteger(currentPage) || currentPage < 1) {
            return res.status(400).json({
                message: "Page must be a positive integer"
            });
        }

       
        if (
            !Number.isInteger(pageLimit) ||
            pageLimit < 1 ||
            pageLimit > 100
        ) {
            return res.status(400).json({
                message: "Limit must be an integer between 1 and 100"
            });
        }
        if(name){
            filter.name={
                $regex:name,
                $options:'i'
            };
        }
        if(department){
            filter.department=department;

        }
        if(age){
            filter.age=Number(age);
        }
        
        const totalEmployees=await Employee.countDocuments(filter);
        const skip=(currentPage-1)*pageLimit;
        const  employees=await Employee.find(filter).skip(skip).limit(pageLimit);
        
        const  totalPages=Math.ceil(totalEmployees/pageLimit)
        res.status(200).json({
            message:"Employees fetched successfully",
            data:employees,
            currentPage,
            totalEmployees,
            totalPages,

        });
    }catch(err){
        next(err);
    }
};

const getEmployeeById=async(req,res,next)=>{
    try{
        
        const employee=await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee fetched successfully",
            data: employee
        });
    }catch(err){
        next(err);
    }
};
const updateEmployee=async(req,res,next)=>{
    try{
        const employee=await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
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
        next(err);
    }
};
const deleteEmployee=async(req,res,next)=>{
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
        next(err);
    }
}
module.exports={createEmployee,getAllEmployees,getEmployeeById,updateEmployee,deleteEmployee};