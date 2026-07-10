const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    faculty:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },

    bookingDate:{
        type:Date,
        required:true
    },

    startTime:{
        type:String,
        required:true
    },

    endTime:{
        type:String,
        required:true
    },

    purpose:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Rejected"
        ],
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports=mongoose.model(
    "Booking",
    bookingSchema
);