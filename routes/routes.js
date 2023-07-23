const express = require('express');
const router = express.Router();

const {
  friendPageController,
  homePageController,
  profilePageController,
  searchPageController
} = require('../controllers');

// router.get('/friends', friendPageController.renderFriendsPage); //render friends page
// router.get('/homepage', homePageController.renderHomepage); //render homepage
// router.get('/user/:userId', profilePageController.renderProfilePage); //render profile page
// router.post('/search', searchPageController.handleSearch); //render searchpage after search

module.exports = router;