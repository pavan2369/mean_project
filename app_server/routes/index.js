const express = require('express');
const router = express.Router();
const ctrlTourism = require('../controllers/trigo');
const ctrlOthers = require('../controllers/others');
router.get('/about', ctrlOthers.about);
router.get('/review', ctrlOthers.review);
router.get('/', ctrlTourism.homelist);
router.get('/destinationinfo1', ctrlTourism.destinationinfo1);
router.get('/destinationinfo2', ctrlTourism.destinationinfo2);
router.get('/destinationinfo3', ctrlTourism.destinationinfo3);
router.get('/destinationinfo4', ctrlTourism.destinationinfo4);
router.get('/destinationinfo5', ctrlTourism.destinationinfo5);



router.get('/activity', ctrlTourism.activityInfo);

module.exports = router
