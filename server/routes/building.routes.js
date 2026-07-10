const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
    createBuilding,
    getBuildings,
    getBuilding,
    updateBuilding,
    deleteBuilding
} = require("../controllers/building.controller");

// Admin Only
router.post("/", protect, authorize("Admin"), createBuilding);

router.get("/", protect, getBuildings);

router.get("/:id", protect, getBuilding);

router.put("/:id", protect, authorize("Admin"), updateBuilding);

router.delete("/:id", protect, authorize("Admin"), deleteBuilding);

module.exports = router;