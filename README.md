# Endorfins

[![License Badge](https://img.shields.io/badge/license-MIT%20License-green?style=for-the-badge&logo=appveyor)](https://mit-license.org/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=appveyor)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

### **[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Credits](#credits) | [License](#license) | [Contribute](#contribute) | [Tests](#tests)**

## Description

Welcome to Endorfins!

Have you ever had an exciting day, gone to a new restaurant, started a new fitness routine or even lounged in bed and wanted to talk about it? Well look no further Endorfins is the place for you. Endorfins is a blogpost forum that allows you to connect with other people that have similar interests as you. With our webpage you are able to add friends, create new blog posts, and even read others blog posts that share the same interests. Maybe you are just getting into a hobby. You can connect with others using easy our easy to navigate search bar. Its quick and easy, all you have to do is sign up. Even if you sign up you can still browse and see if you would like to stay longer. We hope you enjoy our webpage!

### User Story
* As a forum website user, I would like to interact with others that have the same interest as myself. 

* I would like to be able to create an account and add friends.

* I would also like to be able to create new posts, view my old posts and search for new posts to read based off of specific tags.

## Installation

Heroku Deployed App: https://sleepy-garden-87469-1e9290099ada.herokuapp.com/.

Or you can download or fork this package. From there, open the integrated terminal (this is for VSCode) and run the following: 
1. Open a terminal with `server.js`
2. In the terminal, enter `npm install`
3. Update your `.env`
4. In the terminal, enter `mysql -u root -p` and complete
5. Enter `SOURCE db\schema.sql` and `exit`
6. Enter `npm run seed`
7. Enter `npm run start`
8. Open http://localhost:3001/

## Usage
Heroku Deployed App: https://sleepy-garden-87469-1e9290099ada.herokuapp.com/.

![Alt text](/public/images/screen-capture-endorfins.gif)


## Credits
- Collaborators: 
  - Joaquin Godina | [joaquingodina0](https://github.com/joaquingodina0)
  - Braden Hamm | [BradHamm](https://github.com/BradHamm)
  - Nhadea Lensky | [itsa-me-dea](https://github.com/itsa-me-dea)
  - Benethea Hardin | [neta2393](https://github.com/neta2393)
- Third-party assets:
    - bcrypt
    - connect-session-sequelize
    - dotenv
    - express
    - express-handlebars
    - express-session
    - handlebars
    - mysql2
    - sequelize
- Tutorials: 
  - UCSD-VIRT-FSF-PT-03-2023-U-LOLC
  - https://www.youtube.com/watch?v=AF6vGYIyV8M

## License

 The license this application is covered under is: [MIT License](https://mit-license.org/).

## Contribute

In general, follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub.
  2. **Clone** the project to your own machine.
  3. **Commit** changes to your own branch.
  4. **Push** your work back up to your fork.
  5. Submit a **pull request** so that your changes can be reviewed.
    
  NOTE: Be sure to merge the latest from "upstream" before making a pull request!
  
  When contributing to this project, please follow the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) code of conduct.

Repository: https://github.com/BradHamm/Endorphins

## Tests
 npm run start

 Heroku cli deployment testing 







