const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    try{
        res.status(200).json("Hello, World!")
    }
    catch(err){
        res.status(500).json(err.message)
    }
    
})

app.listen((3000),()=>{
    console.log("Running");
})