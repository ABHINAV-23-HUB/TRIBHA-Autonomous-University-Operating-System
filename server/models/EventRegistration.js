const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({

    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        required:true
    },

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    registrationDate:{
        type:Date,
        default:Date.now
    },

    attendance:{
        type:String,
        enum:["Pending","Present","Absent"],
        default:"Pending"
    }

},{
    timestamps:true
});

registrationSchema.index(
{
event:1,
student:1
},
{
unique:true
});

module.exports=mongoose.model(
"EventRegistration",
registrationSchema
);