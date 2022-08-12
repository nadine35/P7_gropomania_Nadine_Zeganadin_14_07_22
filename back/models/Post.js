const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  posterId: { type: String, required: true },
  message: { type: String, maxlength: 500, trim: true },
  imageUrl: { type: String, default: "./uploads/profil/avatar.png"  },
  likers: { type: [String], required: true },
  comments: {
    type: [
      {
        commenterId: String,
        commenterPseudo: String,
        text: String,
        timestamp: Number,
      },
    ],
    required: true,
  },
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', PostSchema);