const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const LOCAL_MONGODB_URI = "mongodb://localhost:27017/university";
let memoryServer;

const connectLocalMongo = async () => {
    await mongoose.connect(LOCAL_MONGODB_URI);
    console.log(`✅ MongoDB Connected Successfully`);
};

const connectMemoryMongo = async () => {
    memoryServer = await MongoMemoryServer.create();
    const inMemoryUri = memoryServer.getUri();
    await mongoose.connect(inMemoryUri);
    console.log(`✅ MongoDB Memory Server Connected Successfully`);
};

const connectDB = async () => {
    try {
        await connectLocalMongo();
    } catch (error) {
        if (error?.code === "ECONNREFUSED" || error?.message?.includes("ECONNREFUSED")) {
            console.warn("Local MongoDB is not running. Falling back to in-memory MongoDB for development.");
            await connectMemoryMongo();
            return;
        }

        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
