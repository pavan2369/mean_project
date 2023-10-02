const express = require('express');
const router = express.Router();
const ctrlTourism = require('../controllers/trigo');
const ctrlOthers = require('../controllers/others');
router.get('/about', ctrlOthers.about);
router.get('/', ctrlTourism.homelist);
router.get('/destination', ctrlTourism.destinationsInfo);
router.get('/activity', ctrlTourism.activityInfo);

module.exports = router;
