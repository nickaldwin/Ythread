const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  comment:{
    type: String,
    required: true,
  },
  post:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pots",
    requiered: true,
  },
  userName:{
    type: String,
    ref: "User",
    requiered: true,
  },
  craetedAt:{
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Comment', commentSchema);
