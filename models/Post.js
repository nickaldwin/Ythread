const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
     required: true,
    },
    caption:{
        type: String,
        required: true,
    },
    likes:{
        type: Number,
        required: true,
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    comments:{
        type: Array,
        required: true,
    },
    condition:{
        type: String,
        default:"Not Listed",
    }
});

module.exports = mongoose.model("Post", PostSchema);