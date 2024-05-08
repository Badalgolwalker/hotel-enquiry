const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minLength:[3,"first name should contain atlest 3 character"],
        maxLenth:[10,"first name cannot exceed 10 character"]
    
    },
    lastname:{
        type:String,
        required:true,
        minLength:[3,"last name should contain atlest 3 character"],
        maxLenth:[10,"last name cannot exceed 10 character"]

    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"provide a valid email"]
    },
    phone:{
        
        type:String,
        required:true,
        minLength:[10,"phone should contain atlest 10 character"],
        maxLenth:[10,"first cannot exceed 10 character"]
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
})


module.exports= mongoose.model("user",userSchema)