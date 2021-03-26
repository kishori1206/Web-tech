const mongoose = require("mongoose");
const employeeSchema =new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        unique:true
    },
    pass:{
         type:String,
          require:true
    },
    re_pass:{
        type:String,
        require:true
    }
})

const Register=new mongoose.model("Register",employeeSchema);
module.exports=Register;