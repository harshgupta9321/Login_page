const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://newuser:hellouser@cluster0.h6xdryq.mongodb.net/")
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch(()=>{
    console.log("Failed to connect");
})

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection1",LogInSchema)

module.exports=collection