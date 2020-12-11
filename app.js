const express = require('express');
const app = express();
const operation = require("./calc");

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/add", (req, res)=>{
    var a = parseFloat(req.body.num1)
    var b = parseFloat(req.body.num2)
    res.send(`<h2>Result: ${operation.add(a, b)}</h2>`)
})
app.post("/sub", (req, res)=>{
    var a = parseFloat(req.body.num1)
    var b = parseFloat(req.body.num2)
    res.send(`<h2>Result: ${operation.sub(a, b)}</h2>`)
    
})
app.post("/mul", (req, res)=>{
    var a = parseFloat(req.body.num1)
    var b = parseFloat(req.body.num2)
    res.send(`<h2>Result: ${operation.mul(a, b)}</h2>`)
    
})
app.post("/div", (req, res)=>{
    var a = parseFloat(req.body.num1)
    var b = parseFloat(req.body.num2)
    res.send(`<h2>Result: ${operation.div(a, b)}</h2>`)
   
})

app.listen(7000,()=>{
    console.log("Server listening to 7000");
})