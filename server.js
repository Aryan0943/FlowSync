require("dotenv").config();
const app=require('./app');
const connectDB=require('./config/db');

const port=process.env.PORT || 3000;

const startServer=async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
    } catch(err){
        console.error("Failed to connect to the database");
        console.log(err.message);
        process.exit(1);
    }
    
};
startServer();