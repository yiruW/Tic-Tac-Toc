const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", GameSchema);
