const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use("/api/auth", authRoutes);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Smart Campus Event Management API"
    });

});

module.exports = app;