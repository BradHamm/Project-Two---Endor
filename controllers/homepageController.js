const User = require('../models/User'); // Assuming the User model file is in a separate directory
const Post = require('../models/Post'); // Assuming the Post model file is in a separate directory

async function renderHomepage(req, res) {
  try {
    const currentUser = req.user; // Assuming you have user authentication implemented

    // Retrieve posts based on matching tag scores
    const matchingPosts = await Post.findAll({
      where: {
        tags: currentUser.tagScore // Assuming tags is a column in the Post model representing the tags of a post
      }
    });

    // Retrieve activity feed posts of current friends
    const friendIds = currentUser.currentFriends; 

    const activityFeedPosts = await Post.findAll({
      where: {
        author_id: friendIds
      },
      order: [['createdAt', 'DESC']] // sort by descending
    });

    // Render the homepage
    res.render('homepage', {
      currentUser,
      matchingPosts,
      activityFeedPosts
    });
  } catch (error) {
    console.error('Error rendering homepage:', error);
    // Handle and respond to the error accordingly
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  renderHomepage
};
