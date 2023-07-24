const { User } = require('../models');

async function renderLoginPage(req, res) {
  res.render('login'); //renders the login.hbs page
}

async function handleLoginForm(req, res) {
  try {
    const { username, password } = req.body; //retrieves username and password from body of form

    const existingUser = await User.findOne({
      where: { username } //makes sure that the user doesn't already exist by comparing to the present db
    });

    if (existingUser) {
      return res.status(400).send('User already exists.');
    }

    await User.create({ username, password }); //creates a new instance of the 'user' model with the information

    // sends the user back to the homepage when they created a new user instance
    res.redirect('/homepage');
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).send('Server Error');
  }
}

module.exports = {
  renderLoginPage,
  handleLoginForm
};
