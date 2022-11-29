const express = require("express");
const router = express.Router();
require("../db/conn");
const Products = require("../model/productSchema");

router.get("/", (req, res) => {
  res.json({ status: "Success", message: "Everything is working 🚀" });
});

router.get("/getallproducts", (req, res) => {
  Products.aggregate([
    {
      $project: {
        id: "$_id",
        title: "$Title",
        price: "$Variant Price",
        image: "$Image Src",
        sku: "$Variant SKU",
      },
    },
    { $match: { title: { $ne: "" }, price: { $ne: 0 } } },
  ]).then((item) => {
    res.json({ status: "Success", records: item });
  });
});
module.exports = router;
