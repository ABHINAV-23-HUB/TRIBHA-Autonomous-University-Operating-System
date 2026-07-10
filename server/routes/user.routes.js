const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
    getUsers,
    getProfile
} = require("../controllers/user.controller");

// Admin only
router.get(
    "/",
    protect,
    authorize("Admin"),
    getUsers
);

// All logged-in users
router.get(
    "/profile",
    protect,
    getProfile
);

module.exports = router;