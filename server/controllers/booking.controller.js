const Booking = require("../models/Booking");
const Room = require("../models/Room");

const createBooking = async (req, res) => {
  try {
    const conflict = await Booking.findOne({
      room: req.body.room,
      bookingDate: req.body.bookingDate,
      status: { $ne: "Rejected" },
      $or: [
        {
          startTime: { $lt: req.body.endTime },
          endTime: { $gt: req.body.startTime },
        },
      ],
    });

    if (conflict) {
      return res.status(400).json({
        success: false,
        message: "Room already booked for this time slot.",
      });
    }

    const booking = await Booking.create({
      ...req.body,
      faculty: req.user._id,
    });

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({
    faculty: req.user._id,
  })
    .populate("room")
    .sort({ bookingDate: -1 });

  res.json({
    success: true,
    bookings,
  });
};

const getBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("faculty", "name email")
    .populate({
      path: "room",
      populate: {
        path: "building",
      },
    });

  res.json({
    success: true,
    bookings,
  });
};

const approveBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "Approved" },
    { new: true }
  );

  res.json({
    success: true,
    booking,
  });
};

const rejectBooking = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "Rejected" },
    { new: true }
  );

  res.json({
    success: true,
    booking,
  });
};

module.exports = {
  createBooking,
  getMyBookings,
  getBookings,
  approveBooking,
  rejectBooking,
};