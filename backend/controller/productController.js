const Product = require("../models/Product");

const getAllproducts = async(req, res) => {
    try {
        const products = await Product.find({});
        //to send data in frontend
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
};

const getAllproductById = async(req, res) => {
    try {
        //take the id from the url(router.get)
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
};
module.exports = {
    getAllproducts,
    getAllproductById,
};