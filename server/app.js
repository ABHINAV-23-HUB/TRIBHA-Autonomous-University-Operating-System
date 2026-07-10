const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const buildingRoutes = require("./routes/building.routes");

const app = express();

app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/buildings", buildingRoutes);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Smart Campus Event Management API"
    });

});

module.exports = app;