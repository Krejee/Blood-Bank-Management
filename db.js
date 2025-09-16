const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern-api",{
   
}).then(()=>{
 console.log("connection sucessfully");
}).catch((e)=>{
 console.log("no connection");
 
})