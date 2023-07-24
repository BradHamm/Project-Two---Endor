const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

const {
  friendPageController,
  homePageController,
  profilePageController,
  searchPageController,
  loginPageController,
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

router.get('/login', (req,res) => {
  loginPageController.renderLoginPage(req,res);
})

router.post('/login', (req,res) => {
  loginPageController.handleLoginForm(req,res); //creates new user from login form submission
})

module.exports = router;
