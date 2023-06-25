const Post = require("../models/Post");
const User = require("../models/User");
const fs = require("fs");
const ObjectID = require("mongoose").Types.ObjectId;


exports.createPost = (req, res, next) => {

  console.log("createPost()");
  console.log(req.body);
  
  delete req.body._id;

  let imageUrl = "";
  if (req.file) {
    console.log(req.file.filename);
    imageUrl = req.file.filename;
  }

  const post = new Post({
    ...req.body,
    imageUrl: imageUrl
  });
  post
    .save()
    .then(() => res.status(201).json({ message: "Message crée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.readPost = (req, res, next) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

exports.updatePost = (req, res, next) => {

  console.log("updatePost()");
  console.log(req.body);
  console.log(req.file);

  const postObject = req.file 
    ? {
      message: req.body.message,
      imageUrl: req.file.filename
      }
    : { ...req.body };

  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(202).json({ message: "Message modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Message supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.likePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true }
    )
      .catch((err) => res.status(400).json({  error }));

    await User.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true }
    )
      .then(()=>res.status(200).json({message: 'like envoyé'}))
      .catch(error => res.status(400).json({ error }));
  } catch (err) {
    console.log(err)
  }
};

exports.unlikePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likers: req.body.id },
      },
      { new: true }
    )
      .catch((err) => res.status(500).send({ message: err }));

    await User.findByIdAndUpdate(
      req.body.id,
      {
        $pull: { likes: req.params.id },
      },
      { new: true }
    )
      .then(()=>res.status(200).json({message: 'unlike envoyé'}))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};
