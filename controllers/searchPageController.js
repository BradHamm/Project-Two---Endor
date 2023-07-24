const { Op } = require('sequelize');
const { User, Posts } = require('../models');

async function processSearch(req, res) {
  try {
    // const { searchFilter, searchQuery } = req.query;

    // let searchResults = [];

    // if (searchFilter === 'username') { //Search by username
    //   searchResults = await User.findAll({
    //     where: {
    //       username: {
    //         [Op.like]: `%${searchQuery}%`
    //       }
    //     }
    //   });
    // } else if (searchFilter === 'title') { //Serach by title of post
    //   searchResults = await Posts.findAll({
    //     where: {
    //       title: {
    //         [Op.like]: `%${searchQuery}%`
    //       }
    //     }
    //   });
    // } else if (searchFilter === 'tag') { //Search by tag 
    //   searchResults = await Posts.findAll({
    //     where: {
    //       tags: searchQuery
    //     }
    //   });
    // }

    res.render('search-results', { //Render serach results
      // searchResults
    });
  } catch (error) {
    console.error('Error performing search:', error);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  processSearch
};
