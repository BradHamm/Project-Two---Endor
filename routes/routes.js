const express = require('express');
const router = express.Router();

const {
  friendPageController,
  handleFriendRequest,
  profilePageController,
  searchPageController
} = require('./controllers');

router.get('/friends', friendPageController);
router.post('/friend-request', handleFriendRequest);
router.get('/user/:userId', profilePageController);
router.post('/search', searchPageController);

module.exports = router;
