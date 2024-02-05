const mongoose = require("mongoose");

const MoveSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  player: { type: String, required: true },
  location: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Move", MoveSchema);
