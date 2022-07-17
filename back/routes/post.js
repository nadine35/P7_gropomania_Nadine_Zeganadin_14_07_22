const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');
const commentCtrl = require('../controllers/comment');

router.post('/', multer, postCtrl.createPost);
router.get('/', postCtrl.readPost);
router.put('/:id', multer, postCtrl.updatePost);
router.delete('/:id', multer, postCtrl.deletePost);

router.patch('/like-post/:id', postCtrl.likePost);
router.patch('/unlike-post/:id', postCtrl.unlikePost);

router.post('/comment-post/:id', commentCtrl.createComment);
router.put('/update-comment/:id', commentCtrl.updateComment);
router.delete('/delete-comment/:id', commentCtrl.deleteComment);

module.exports = router;