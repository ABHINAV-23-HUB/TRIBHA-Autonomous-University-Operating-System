const express = require("express");
const eventRoutes=require("./routes/event.routes");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const buildingRoutes = require("./routes/building.routes");
const roomRoutes = require("./routes/room.routes");
const bookingRoutes = require("./routes/booking.routes");
const eventRoutes=require("./routes/event.routes");
const registrationRoutes=require("./routes/registration.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const reportRoutes = require("./routes/report.routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/buildings", buildingRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/registrations",registrationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/reports", reportRoutes); 




app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Smart Campus Event Management API"
    });

});
app.use("/api/events",eventRoutes);
module.exports = app;