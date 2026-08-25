const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');
const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);

router.post('/upload', multer, userCtrl.upload);

router.get('/:id', userCtrl.userInfo);

router.get('/', userCtrl.getAllUsers);

router.put('/:id', userCtrl.updateUser);

router.delete('/:id', userCtrl.deleteUser);

module.exports = router;