const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    tasks:{
        type:[String],
    },
}); 


module.exports = mongoose.model("NewUser", userSchema);