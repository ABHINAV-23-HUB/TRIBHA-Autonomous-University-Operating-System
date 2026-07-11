const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {

roomUtilization,

monthlyBookings,

eventCategories,

participationReport

} = require("../controllers/report.controller");

router.get(
"/room-utilization",
protect,
authorize("Admin"),
roomUtilization
);

router.get(
"/monthly-bookings",
protect,
authorize("Admin"),
monthlyBookings
);

router.get(
"/event-categories",
protect,
authorize("Admin"),
eventCategories
);

router.get(
"/student-participation",
protect,
authorize("Admin"),
participationReport
);

module.exports = router;