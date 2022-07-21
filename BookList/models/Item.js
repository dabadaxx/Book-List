const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Product Schema
const ItemSchema = new Schema({
  ISBN: {
    type: String,
    required: true
  },
  Title: {
    type: String,
    required: true
  }, 
  Author: {
    type: String,
    required: true
  },
  Copies: {
    type: Number,
    required: true
  },
});

// Export the Schema
module.exports = Item = mongoose.model("item", ItemSchema);