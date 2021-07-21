require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async() => {
    try {
        //any data available in database then we want to delete it
        await Product.deleteMany({});
        //in product schema import our data that we want to save in database
        await Product.insertMany(productsData);
        console.log("data import success ");
        process.exit();
    } catch (error) {
        console.log("error with data import");
        process.exit(1);
    }
};
//for run import data immediately
importData();