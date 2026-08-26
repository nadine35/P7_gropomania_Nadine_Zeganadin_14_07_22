const express = require('express');

const router = express.Router();

const familyCtrl = require('../controllers/family');

router.post('/', familyCtrl.createFamily);
router.get('/', familyCtrl.getMyFamily);
router.get('/members', familyCtrl.getFamilyMembers);
router.post('/members', familyCtrl.addMember);

module.exports = router;