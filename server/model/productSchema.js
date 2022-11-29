const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Handle: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Body: {
    type: String,
    required: true,
  },
  Vendor: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Tags: {
    type: String,
    required: true,
  },
  Option1_Name: {
    type: String,
    required: true,
  },
  Option1_Value: {
    type: String,
    required: true,
  },
  Option2_Name: {
    type: String,
    required: true,
  },
  Option2_Value: {
    type: String,
    required: true,
  },
  Option3_Name: {
    type: String,
    required: true,
  },
  Option3_Value: {
    type: String,
    required: true,
  },
  Variant_SKU: {
    type: String,
    required: true,
  },
  Variant_Grams: {
    type: String,
    required: true,
  },
  Variant_Inventory_Qty: {
    type: String,
    required: true,
  },
  Variant_Inventory_Policy: {
    type: String,
    required: true,
  },
  Variant_Fulfillment_Service: {
    type: String,
    required: true,
  },
  Variant_Price: {
    type: Number,
    required: true,
  },
  Variant_Compare_At_Price: {
    type: String,
    required: true,
  },
  Image_Src: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("PRODUCTS", productSchema);
module.exports = Products;
