const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class FriendsList extends Model {}
FriendsList.init({
  userId: {
    type: DataTypes.INTEGER,
  },
  friendId: {
    type: DataTypes.INTEGER,
  },
},
  {
    sequelize, 
    modelName: 'friendslist', 
    tableName: 'friendslists', 
    timestamps: true, 
  },
);

module.exports = FriendsList;