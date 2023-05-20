const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectDB;
