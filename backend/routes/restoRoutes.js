const express = require("express");
const router = express.Router();

// USER CONTROLLER
const {
  getUsers,
  deleteUser,
  registerUser,
  loginUser,
} = require("../controller/userController.js");

// PRODUCT CONTROLLER
const {
  getProducts,
  deleteProduct,
  getOneProduct,
  updateProduct,
  uploadProduct,
  getProductByName,
  softDeleteProduct,
} = require("../controller/productController.js");

// USER ROUTES
router.route("/users").get(getUsers);
router.route("/users/:id").delete(deleteUser);
router.route("/users/register").post(registerUser);
router.route("/users/login").post(loginUser);

// PRODUCT ROUTES
router.route("/products").get(getProducts);
router.route("/products/:id").delete(deleteProduct);
router.route("/products/:id").get(getOneProduct);
router.route("/products/:id").put(updateProduct);
router.route("/products/uploadProduct").post(uploadProduct);
router.route("/products").get(getProductByName);
router.route("/products/:id").patch(softDeleteProduct);

module.exports = router;
