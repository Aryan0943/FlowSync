const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,  
        trim:true
    },
    email:{
        type:String,
        required:true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    department:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:65
    }
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
