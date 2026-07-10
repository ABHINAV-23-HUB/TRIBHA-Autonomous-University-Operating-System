const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
{
    roomName: {
        type: String,
        required: true
    },

    roomNumber: {
        type: String,
        required: true,
        unique: true
    },

    building: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Building",
        required: true
    },

    floor: {
        type: Number,
        required: true
    },

    capacity: {
        type: Number,
        required: true
    },

    facilities: [{
        type: String
    }],

    roomType: {
        type: String,
        enum: [
            "Classroom",
            "Seminar Hall",
            "Auditorium",
            "Lab",
            "Conference Room"
        ],
        default: "Classroom"
    },

    status: {
        type: String,
        enum: ["Available", "Maintenance"],
        default: "Available"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Room", roomSchema);