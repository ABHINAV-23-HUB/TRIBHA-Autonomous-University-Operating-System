const Event=require("../models/Event");
const Booking=require("../models/Booking");
const createEvent=async(req,res)=>{

try{

const booking=await Booking.findById(req.body.booking);

if(!booking){

return res.status(404).json({

success:false,

message:"Booking not found"

});

}

if(booking.status!=="Approved"){

return res.status(400).json({

success:false,

message:"Booking must be approved"

});

}

const event=await Event.create({

...req.body,

faculty:req.user._id

});

res.status(201).json({

success:true,

event

});

}

catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

const getEvents=async(req,res)=>{

const events=await Event.find()

.populate("faculty","name")

.populate({

path:"booking",

populate:{

path:"room",

populate:{

path:"building"

}

}

});

res.json({

success:true,

events

});

};
const getMyEvents=async(req,res)=>{

const events=await Event.find({

faculty:req.user._id

})

.populate({

path:"booking",

populate:{

path:"room"

}

});

res.json({

success:true,

events

});

};
const updateEvent=async(req,res)=>{

const event=await Event.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true

}

);

res.json({

success:true,

event

});

};
const deleteEvent=async(req,res)=>{

await Event.findByIdAndDelete(req.params.id);

res.json({

success:true,

message:"Event Deleted"

});

};
module.exports={

createEvent,

getEvents,

getMyEvents,

updateEvent,

deleteEvent

};