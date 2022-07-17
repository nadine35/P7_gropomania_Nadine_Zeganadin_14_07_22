const Post = require('../models/Post');

exports.createComment = (req, res , next) => {
    delete req.body._id;
    Post.findOneAndUpdate({ _id: req.params.id },
        {
            $push: {
              comments: {
                commenterId: req.body.commenterId,
                commenterPseudo: req.body.commenterPseudo,
                text: req.body.text,
                timestamp: new Date().getTime(),
              },
            },
        }
    )
    .then(() => res.status(201).json({ message: 'Commentaire crée !' }))
    .catch(error => res.status(400).json ({ error }));
};

exports.updateComment = (req, res, next) => {

    Post.findOneAndUpdate( { _id: req.params.id },
        (err, docs) => {
            const theComment = docs.comments.find((comment) => 
            comment._id.equals(req.body.commentId))
            if (!theComment) return res.status(400).send(" Le commentaire n'existe pas ")
            theComment.text = req.body.text
            
            return docs.save((err) => {
                if (!err) return res.status(200)
            })
        })
        .then(() => res.status(202).json({ message: 'Commentaire modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {

    Post.findOneAndUpdate ( { _id: req.params.id },
        {
            $pull : {
                comments: {
                    _id: req.body.commentId
                }
            }
        })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};