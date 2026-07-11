const Event = require("../models/Event");
const Registration = require("../models/EventRegistration");
const registerEvent = async (req,res)=>{

try{

const event = await Event.findById(req.params.eventId);

if(!event){

return res.status(404).json({
success:false,
message:"Event not found"
});

}

const already = await Registration.findOne({

event:req.params.eventId,

student:req.user._id

});

if(already){

return res.status(400).json({

success:false,

message:"Already Registered"

});

}

const total = await Registration.countDocuments({

event:req.params.eventId

});

if(total>=event.maxParticipants){

return res.status(400).json({

success:false,

message:"Event Full"

});

}

await Registration.create({

event:req.params.eventId,

student:req.user._id

});

res.status(201).json({

success:true,

message:"Registration Successful"

});

}catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};
const myRegistrations = async(req,res)=>{

const registrations = await Registration.find({

student:req.user._id

})

.populate({

path:"event",

populate:{
path:"booking"
}

});

res.json({

success:true,

registrations

});

};
const eventStudents = async(req,res)=>{

const students = await Registration.find({

event:req.params.eventId

})

.populate("student","name email department phone");

res.json({

success:true,

students

});

};
const cancelRegistration = async(req,res)=>{

await Registration.findOneAndDelete({

event:req.params.eventId,

student:req.user._id

});

res.json({

success:true,

message:"Registration Cancelled"

});

};
module.exports={

registerEvent,

myRegistrations,

eventStudents,

cancelRegistration

};