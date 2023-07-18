const User = require('../models/User');
const Post = require('../models/Post');

async function renderHomepage(req, res) {
  try {
    const currentUser = req.user;

    // Retrieve posts matching the present tag scores of the user (Not by quantity but by match)
    const matchingPosts = await Post.findAll({
      where: {
        tags: currentUser.tagScore 
      }
    });


    const friendIds = currentUser.currentFriends; 

    const activityFeedPosts = await Post.findAll({
      where: {
        author_id: friendIds
      },
      order: [['createdAt', 'DESC']]
    });

    // Render the homepage
    res.render('homepage', {
      currentUser,
      matchingPosts,
      activityFeedPosts
    });
  } catch (error) {
    console.error('Error rendering homepage:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  renderHomepage
};
