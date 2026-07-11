const User = require("../models/User");
const Building = require("../models/Building");
const Room = require("../models/Room");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const Registration = require("../models/EventRegistration");
const adminDashboard = async (req, res) => {

    const totalUsers = await User.countDocuments();

    const totalBuildings = await Building.countDocuments();

    const totalRooms = await Room.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const totalEvents = await Event.countDocuments();

    const pendingBookings = await Booking.countDocuments({
        status: "Pending"
    });

    const totalRegistrations = await Registration.countDocuments();

    const recentEvents = await Event.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.json({

        success: true,

        dashboard: {

            totalUsers,

            totalBuildings,

            totalRooms,

            totalBookings,

            totalEvents,

            pendingBookings,

            totalRegistrations,

            recentEvents

        }

    });

};
const facultyDashboard = async (req, res) => {

    const myBookings = await Booking.countDocuments({

        faculty: req.user._id

    });

    const myEvents = await Event.countDocuments({

        faculty: req.user._id

    });

    const upcomingEvents = await Event.find({

        faculty: req.user._id,

        status: "Upcoming"

    });

    res.json({

        success: true,

        dashboard: {

            myBookings,

            myEvents,

            upcomingEvents

        }

    });

};
const studentDashboard = async (req, res) => {

    const registrations = await Registration.countDocuments({

        student: req.user._id

    });

    const upcomingEvents = await Event.find({

        status: "Upcoming"

    }).limit(10);

    const myRegistrations = await Registration.find({

        student: req.user._id

    }).populate("event");

    res.json({

        success: true,

        dashboard: {

            registrations,

            upcomingEvents,

            myRegistrations

        }

    });

};