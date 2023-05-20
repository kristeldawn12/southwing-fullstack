const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete"); // Soft delete

const productSchema = mongoose.Schema({
  name: { type: String, index: "text" },
  category: String,
  image: String,
  price: String,
  description: String,
});

productSchema.plugin(mongoose_delete);

module.exports = mongoose.model("product", productSchema);
