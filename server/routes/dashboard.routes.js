const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {

adminDashboard,

facultyDashboard,

studentDashboard

} = require("../controllers/dashboard.controller");

router.get(

"/admin",

protect,

authorize("Admin"),

adminDashboard

);

router.get(

"/faculty",

protect,

authorize("Faculty"),

facultyDashboard

);

router.get(

"/student",

protect,

authorize("Student"),

studentDashboard

);

module.exports = router;
