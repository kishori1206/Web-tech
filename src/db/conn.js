const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mini2",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() =>{
    console.log("Connection Successfull...!!");
})
.catch(() => {
    console.log("Error, Not Connected");
});
