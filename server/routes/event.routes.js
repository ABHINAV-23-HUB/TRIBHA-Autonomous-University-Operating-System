const express=require("express");

const router=express.Router();

const protect=require("../middleware/auth.middleware");

const authorize=require("../middleware/role.middleware");

const{

createEvent,

getEvents,

getMyEvents,

updateEvent,

deleteEvent

}=require("../controllers/event.controller");

router.post(

"/",

protect,

authorize("Faculty"),

createEvent

);

router.get(

"/",

protect,

getEvents

);

router.get(

"/my",

protect,

authorize("Faculty"),

getMyEvents

);

router.put(

"/:id",

protect,

authorize("Faculty"),

updateEvent

);

router.delete(

"/:id",

protect,

authorize("Faculty"),

deleteEvent

);

module.exports=router;