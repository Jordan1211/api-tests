const express = require('express');
const app = express(); 

app.get("/", (req, res)=>{
    res.send("Welcome to my Jordan's backend application");
});

app.get("/jordan", (req, res)=>{
    res.send("Hello Jordan!");
});

app.listen(3000, ()=>{
    console.log("Listening");
})