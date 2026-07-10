const express=require("express");

const router=express.Router();

const protect=require("../middleware/auth.middleware");

const authorize=require("../middleware/role.middleware");

const{

createBooking,

getMyBookings,

getBookings,

approveBooking,

rejectBooking

}=require("../controllers/booking.controller");

router.post(
"/",
protect,
authorize("Faculty"),
createBooking
);

router.get(
"/my",
protect,
authorize("Faculty"),
getMyBookings
);

router.get(
"/",
protect,
authorize("Admin"),
getBookings
);

router.put(
"/approve/:id",
protect,
authorize("Admin"),
approveBooking
);

router.put(
"/reject/:id",
protect,
authorize("Admin"),
rejectBooking
);

module.exports=router;