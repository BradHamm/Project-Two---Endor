const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}
User.init({
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
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
  // tagScore: {
  //   type: DataTypes.JSON,
  //   defaultValue: {}
  // },
  // currentFriends: {
  //   type: DataTypes.ARRAY(DataTypes.INTEGER),
  //   defaultValue: []
  // }
},
{
  sequelize, 
    modelName: 'user', 
    tableName: 'users', 
    timestamps: false,
});

module.exports = User;
