const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
    createRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom
} = require("../controllers/room.controller");

router.post(
    "/",
    protect,
    authorize("Admin"),
    createRoom
);

router.get(
    "/",
    protect,
    getRooms
);

router.get(
    "/:id",
    protect,
    getRoom
);

router.put(
    "/:id",
    protect,
    authorize("Admin"),
    updateRoom
);

router.delete(
    "/:id",
    protect,
    authorize("Admin"),
    deleteRoom
);

module.exports = router;