const { User } = require('../models');

const withAuth = async (req, res, next) => {
  // if not logged in, route to login
  if (!req.session.logged_in) {
    res.redirect('/login');
    return; // prevents next
  }

  try {
    // retrieves the user's id
    const currentUser = await User.findByPk(req.session.user_id);
    
    if (!currentUser) { //if that id doesn't exist, also return to the login page
      res.redirect('/login');
      return;
    }

    // override currentUser const with new user information
    req.user = currentUser;

    // goes next so it can complete the callback
    next();
  } catch (error) {
    console.error('Error with authentication middleware:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = withAuth;
