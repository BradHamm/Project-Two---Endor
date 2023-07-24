const { Op } = require('sequelize');
const { User, FriendsList } = require('../models'); 

async function renderFriendsPage(req, res) {
  try {
    const currentUser = req.user;

    const currentFriends = await User.findAll({
      where: {
        id: {[Op.in]: currentUser.currentFriends}
      }
    });

    // Retrieve pending FR's
    const pendingRequests = await FriendsList.findAll({
      where: {
        recipient_id: currentUser.id 
      },
      include: [{ model: User, as: 'sender' }]
    });

    // Render the friends page
    res.render('friends', {
      currentUser,
      currentFriends,
      pendingRequests
    });
  } catch (error) {
    console.error('Error rendering friends page:', error);
    // Handle and respond to the error accordingly
    res.status(500).send('Server Error');
  }
}

async function handleFriendRequest(req, res) {
  try {
    const currentUser = req.user;
    const { requestId, action } = req.params; //accept or deny

    // Find the request by ID
    const friendRequest = await FriendRequests.findByPk(requestId);

    // VErify that the friend request exists and is addressed to the current user
    if (!friendRequest || friendRequest.recipient_id !== currentUser.id) {
      return res.status(404).send('Friend request not found');
    }

    if (action === 'accept') {
      // PUshing the id of the accepted FR into the currentFriends array
      currentUser.currentFriends.push(friendRequest.sender_id);
      await currentUser.save();

      // Removing the request from the FR db
      await friendRequest.destroy();
    } else if (action === 'deny') {
      // Remove the friend request
      await friendRequest.destroy();
    } else {
      return res.status(400).send('Invalid action');
    }

    res.redirect('/friends'); // Redirects back to the friends page, what would it be in .hbs?
  } catch (error) {
    console.error('Error handling friend request:', error);

    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  renderFriendsPage,
  handleFriendRequest
};
