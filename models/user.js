const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,
        trim:true
    },
    email:{
        type:string,
        required:true,
        trim:true,
    },
    password:{
        type:string,
        required:true,
        minlength:6,
    },
    role:{
        type:string,
        enum:[user,admin],
        required:true

    }
    ,timestamps:true

});
const User=mongoose.model('User',userSchema);
module.exports=User;