const { Console } = require("console");
const express = require("express");
const path =require("path");
const app = express();
//const hbs =require("hbs");
require("./db/conn");
const Register=require("./models/registers");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const templates_path =path.join(__dirname,"../templates/views");
//const templates_path =path.join(__dirname,"../templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",templates_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
//hbs.registerPartials(partials_path);
// app.get("/",(req,res)=>{
//     res.render("index");
// });

app.get("/",(req,res)=>{
    res.render("register");
});
// app.get("/",(req,res)=>{
//     res.render("login");
// });
app.post("/register",async(req,res)=>{
    try{
        const password=req.body.pass;
        const cpassword=req.body.re_pass;
        if(password===cpassword){
const registerEmployee =new Register({
    name:req.body.name,
    email:req.body.email,
    pass:req.body.pass,
    re_pass:req.body.re_pass
})
const registered =await registerEmployee.save();
res.status(201).render("index")
        }else{
            res.send("not match");
        }
//console.log(req.body.name);
//res.send(req.body.name);
    }
    catch(error){
        res.status(400).send(error);

    }

})
app.listen(port ,() =>{
    console.log(`server is runing now ${port}`);
})


