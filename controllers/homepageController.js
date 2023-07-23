const { User, Posts } = require('../models');
const { Op } = require('sequelize');

async function renderHomepage(req, res) {
  try {
    const currentUser = req.user;

    const matchingPosts = await Posts.findAll({
      where: {
        tags: {
          [Op.overlap]: currentUser.tagScore //retrieves any post with tags matching/overlapping with the tag score of the current user
        }
      }
    });
    const friendIds = currentUser.currentFriends; 
    const activityFeedPosts = await Posts.findAll({
      where: {
        author_id: friendIds
      },
      order: [['createdAt', 'DESC']]
    });
    res.render('homepage', {
      currentUser,
      matchingPosts,
      activityFeedPosts

    }); 

  } catch (error) {
    console.error('Error rendering homepage:', error);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  renderHomepage
};