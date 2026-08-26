const express=require('express');
const errorHandler=require('./middleware/errorMiddleware.js');
const authRoutes=require('./routes/authRoute.js');
const app=express();
app.use(express.json());
const employeeRoutes=require('./routes/employeeRoutes');

app.use('/api',employeeRoutes);
app.use('/api/auth',authRoutes);
app.use(errorHandler);
app.get('/',(req,res)=>{
    res.send("Welcome  to FlowSync");
});

module.exports=app;