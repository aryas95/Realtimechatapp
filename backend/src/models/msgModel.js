const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  UserName1: {
    type: String,
    required: true,
  },
  UserName2: {
    type: String,
    required: true,
  },
  msgType: {
    type: String,
    required: true,
  },
  msgBody: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  flag: {
    type: [String],
    default: "0",
  },
});

module.exports = mongoose.model("Msg", msgSchema);
