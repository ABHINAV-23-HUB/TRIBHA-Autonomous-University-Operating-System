const Room = require("../models/Room");

// Create Room
const createRoom = async (req, res) => {
    try {

        const room = await Room.create(req.body);

        res.status(201).json({
            success: true,
            room
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Rooms
const getRooms = async (req, res) => {

    try {

        const rooms = await Room.find()
            .populate("building", "buildingName code");

        res.json({
            success: true,
            rooms
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Room
const getRoom = async (req, res) => {

    try {

        const room = await Room.findById(req.params.id)
            .populate("building");

        res.json({
            success: true,
            room
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Update Room
const updateRoom = async (req, res) => {

    try {

        const room = await Room.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            room
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Room
const deleteRoom = async (req, res) => {

    try {

        await Room.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Room Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom
};