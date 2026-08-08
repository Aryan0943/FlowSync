const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    department:String,
    age:Number
});
const Employee=mongoose.model('Employee',employeeSchema);
// const employee1=new Employee({
//     name:"Aryan Sharma",
//     email:"aryan.sharma@example.com",
//     department:"Engineering",
//     age:28
// });
// await employee1.save();

// await Employee.create({
//     name:"Aryan Sharma",
//     email:"aryan.sharma@example.com",
//     department:"Engineering",
//     age:28
// });

module.exports=Employee;
