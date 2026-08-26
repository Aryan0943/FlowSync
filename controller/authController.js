const User=require("../models/user.js");
const bycrpt=require('bcrpytjs');
const register=async(res,req,next)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Name,email and password are required"});
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }
        if(!email.includes("@")){
            return res.status(400).json({message:"Invalid email"});
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword=await bycrpt.hash(password,10);
        const user=new User({
            name,
            email,
            hashedPassword
            
        });
        res.status(201).json({
            message:"User registered successfully",
            
        });
    }catch(err){
        next(err);
    }
}
const login=async(res,req,next)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const isPasswordValid=await bycrpt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid email or password"});
        }
        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({
            message:"User logged in successfully",
            token:token
        });
    }catch(err){
        next(err);
    }
}
module.exports={register};