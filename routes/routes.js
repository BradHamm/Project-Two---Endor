const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

const {
  friendPageController,
  homePageController,
  profilePageController,
  searchPageController
} = require('../controllers');

router.get('/friends', withAuth, (req, res) => {
  friendPageController.renderFriendsPage(req,res);
});

router.get('/homepage', withAuth, (req, res) => {
  homePageController.renderHomepage(req,res);
});

router.get('/user/:userId', (req, res) => {
  profilePageController.renderProfilePage(req,res);
})

router.post('/search', withAuth, (req,res) => {
  searchPageController.handleSearch(req,res); //render searchpage after search
})

module.exports = router;
