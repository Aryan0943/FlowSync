const express=require('express');
const app=express();
app.use(express.json());
const employeeRoutes=require('./routes/employeeRoutes');

app.use('/api',employeeRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome  to FlowSync");
});
module.exports=app;