const User = require("../models/User");

// Get all users
const getUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password");

        res.json({
            success: true,
            users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get logged-in user profile
const getProfile = async (req, res) => {

    res.json({
        success: true,
        user: req.user
    });

};

module.exports = {
    getUsers,
    getProfile
};