const mongoose = require("mongoose");

const DEFAULT_MONGODB_URI = "mongodb://127.0.0.1:27017/university";

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI || DEFAULT_MONGODB_URI;

    try {
        await mongoose.connect(mongoUri);

        console.log(`✅ MongoDB Connected Successfully`);

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;