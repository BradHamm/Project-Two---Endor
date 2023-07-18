const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');

const FriendsList = sequelize.define('FriendsList', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  friendId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
});

FriendsList.belongsTo(User, { foreignKey: 'userId', as: 'user' });
FriendsList.belongsTo(User, { foreignKey: 'friendId', as: 'friend' });

module.exports = FriendsList;