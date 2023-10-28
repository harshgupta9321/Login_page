const express=require('express')
const mongoose= require('mongoose');
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
// const connectToMongo=require('./database')
 
const PORT=3000

// const DB_URL="mongodb+srv://newuser:hellouser@cluster0.h6xdryq.mongodb.net/"


// async function connectToMongo() {
//   await mongoose.connect(DB_URL).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
// }
// mongoose.connect(DB_URL)

// const connectToMongo=mongoose.connection

// connectToMongo.once('open',()=>{
//     console.log("successfully database connected")
// })
// connectToMongo.on('error',()=>{
//     console.log("error is generated")
// })



app.use(express.json)

// //Available routes
// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))


app.listen(PORT,()=>{
    console.log("server is connected")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post("./signup",async (req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("home")
})