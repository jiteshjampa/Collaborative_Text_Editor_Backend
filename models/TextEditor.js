const mongoose = require("mongoose");

const TextEditorSchema = new mongoose.Schema({
  TextId: { type: String, default: "" },
  Title: { type: String, default: "" },
  content: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TextEditor", TextEditorSchema);
