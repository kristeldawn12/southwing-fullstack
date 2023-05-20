const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel.js");

// LOGIN
// GET all users
// @route GET /southwing-cafeteria/users
const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// REGISTER
// POST a user
// @route POST /southwing-cafeteria/users/register
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    const result = await Users.findOne({ email: email });
    if (result) {
      res.status(409);
      throw new Error({ message: "Email already exists", alert: false });
    } else {
      const data = Users(req.body);
      const save = await data.save();
      res
        .status(200)
        .send({ message: "User registered successfully", alert: true });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN a user
// @route POST /southwing-cafeteria/users/login
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const result = await Users.findOne({ email: email });
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      res
        .status(200)
        .send({ message: "Login successful", alert: true, data: dataSend });
    } else {
      res.status(409);
      throw new Error({
        message: "Email doesn't exist, Please register",
        alert: false,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE DELETE user by id
// @route /southwing-cafeteria/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    console.log(user);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    await user.deleteOne();
    res
      .status(200)
      .json({ id: req.params.id, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { getUsers, deleteUser, registerUser, loginUser };
