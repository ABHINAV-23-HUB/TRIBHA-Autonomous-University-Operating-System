const Booking = require("../models/Booking");
const Event = require("../models/Event");
const Registration = require("../models/EventRegistration");
const Room = require("../models/Room");
const roomUtilization = async (req, res) => {

    const report = await Booking.aggregate([
        {
            $group: {
                _id: "$room",
                totalBookings: { $sum: 1 }
            }
        },
        {
            $sort: {
                totalBookings: -1
            }
        }
    ]);

    res.json({
        success: true,
        report
    });

};
const monthlyBookings = async (req, res) => {

    const report = await Booking.aggregate([
        {
            $group: {
                _id: {
                    month: {
                        $month: "$bookingDate"
                    }
                },
                totalBookings: {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                "_id.month": 1
            }
        }
    ]);

    res.json({
        success: true,
        report
    });

};
const eventCategories = async (req, res) => {

    const report = await Event.aggregate([
        {
            $group: {
                _id: "$category",
                totalEvents: {
                    $sum: 1
                }
            }
        }
    ]);

    res.json({
        success: true,
        report
    });

};
const participationReport = async (req, res) => {

    const report = await Registration.aggregate([
        {
            $group: {
                _id: "$event",
                totalStudents: {
                    $sum: 1
                }
            }
        }
    ]);

    res.json({
        success: true,
        report
    });

};
module.exports = {

    roomUtilization,

    monthlyBookings,

    eventCategories,

    participationReport

};
