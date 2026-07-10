const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema(
{
    buildingName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },

    description: {
        type: String,
        default: ""
    },

    floors: {
        type: Number,
        default: 1
    },

    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Building", buildingSchema);