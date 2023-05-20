const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js");

// GET all products
// @route GET /products
const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({}).sort({ category: -1 });
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET one product
// @route GET /products/:id
const getOneProduct = asyncHandler(async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await Product.findById(productID);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.status(200).json({
      message: "Product fetched successfully",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET product by name
// @route GET /products?name=

const getProductByName = asyncHandler(async (req, res) => {
  try {
    const productName = req.query.name;
    const product = await Product.find({
      name: { $regex: productName, $options: "i" },
    });

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a product
// @route POST /products/uploadProduct
const uploadProduct = asyncHandler(async (req, res) => {
  try {
    const { name, category, image, price, description } = req.body;

    if (!name || !category || !image || !price || !description) {
      res.status(406);
      throw new Error("Please fill all the fields");
    }

    const newProduct = new Product({
      name,
      category,
      image,
      price,
      description,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a product
// @route PUT /products/:id
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE product by id
// @route DELETE /products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    await product.deleteOne();
    res
      .status(200)
      .json({ id: req.params.id, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// soft delete product by id
// @route PATCH /products/:id
const softDeleteProduct = asyncHandler(async (req, res) => {
  try {
    const softDeleteProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { deleted: true },
      { new: true }
    );

    if (!softDeleteProduct) {
      res.status(404).json({
        error: "Product not found",
        data: softDeleteProduct,
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      data: softDeleteProduct,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
  uploadProduct,
  getProductByName,
  softDeleteProduct,
};
