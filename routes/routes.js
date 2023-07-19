const express = require('express');
const router = express.Router();

const {
  friendPageController,
  homepageController,
  profilePageController,
  searchPageController
} = require('../controllers');

router.get('/friends', friendPageController);
router.get('/homepage', homepageController);
router.get('/user/:userId', profilePageController);
router.post('/search', searchPageController);

module.exports = router;
