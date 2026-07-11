const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        enum:[
            "Workshop",
            "Seminar",
            "Hackathon",
            "Conference",
            "Competition",
            "Cultural",
            "Sports"
        ],
        default:"Workshop"
    },

    faculty:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",
        required:true
    },

    maxParticipants:{
        type:Number,
        required:true
    },

    registrationDeadline:{
        type:Date,
        required:true
    },

    status:{
        type:String,
        enum:[
            "Upcoming",
            "Ongoing",
            "Completed",
            "Cancelled"
        ],
        default:"Upcoming"
    }

},{
    timestamps:true
});
