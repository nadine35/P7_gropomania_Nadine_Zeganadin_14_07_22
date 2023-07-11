const express = require('express');
const router = express.Router();

const userMulter = require('../middleware/userMulter-config');
const userCtrl = require('../controllers/user');

router.post('/signup', userMulter, userCtrl.signup);
router.post('/login', userMulter, userCtrl.login);

router.post('/', userMulter, userCtrl.uploadImgProfil);
router.get('/:id', userCtrl.userInfo);
router.get('/', userCtrl.getAllUsers);
router.put('/:id', userMulter, userCtrl.updateUser);
router.delete('/:id', userMulter, userCtrl.deleteUser);

module.exports = router;