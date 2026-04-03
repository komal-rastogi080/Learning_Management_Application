const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("backend chal raha hai");
})

app.listen(5000,()=>{
    console.log("servver is running on port 5000");
})