const express=require("express");

const router=express.Router();

const protect=require("../middleware/auth.middleware");

const authorize=require("../middleware/role.middleware");

const{

registerEvent,

myRegistrations,

eventStudents,

cancelRegistration

}=require("../controllers/registration.controller");

router.post(

"/:eventId",

protect,

authorize("Student"),

registerEvent

);

router.get(

"/my",

protect,

authorize("Student"),

myRegistrations

);

router.delete(

"/:eventId",

protect,

authorize("Student"),

cancelRegistration

);

router.get(

"/students/:eventId",

protect,

authorize("Faculty","Admin"),

eventStudents

);

module.exports=router;