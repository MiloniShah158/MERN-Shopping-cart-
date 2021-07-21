//for connection with database
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongodb connection success");
    } catch (error) {
        console.log("mongodb connection fail");
        process.env(1);
    }
};
module.exports = connectDB;