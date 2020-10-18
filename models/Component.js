const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  cost: {
    type: Number,
    required: true,
  },
  fixedCost: {
    type: Boolean,
    required: true,
  },
});

module.exports = Component = mongoose.model("component", ComponentSchema);
