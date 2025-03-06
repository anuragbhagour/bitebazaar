import express from "express";

const app = express();
const port = 5000;

app.get("/",(req,res)=>{
    res.send("Home")
})

app.post("/register",(req,res)=>{
    res.send("register")
})

app.post("/login",(req,res)=>{
    res.send("Login")
})

app.get("/profile",(req,res)=>{
    res.send("Profile")
})

app.listen(5000,()=>{
    console.log(`Server is running on port ${port}`);
    
})