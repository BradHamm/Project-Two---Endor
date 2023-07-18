const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  bio: {
    type: DataTypes.STRING(5000),
    allowNull: false
  },
  tagScore: {
    type: DataTypes.JSON,
    defaultValue: {}
  },
  currentFriends: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  }
});

module.exports = User;
