const { User, Posts } = require('../models');

async function renderUserProfile(req, res) {
  try {
    const { userId } = req.query;
    const user = await User.findByPk(userId);
    if (!user) { // If the user does not exist in the db - return 404
      return res.status(404).send('User not found');
    }

    // Retrieve all posts made by the user
    const userPosts = await Posts.findAll({
      where: {
        author_id: userId 
      },
      order: [['createdAt', 'DESC']] // Sorted in escending order
    });
    // Render the user profile
    res.render('user-profile', {
      user,
      userPosts
    });
  } catch (error) {
    console.error('Error rendering user profile:', error);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  renderUserProfile
};