const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Tags extends Model {} 
Tags.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  postHistory: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  },
  tagName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  },
  {
    sequelize, 
    modelName: 'tags', 
    tableName: 'tags', 
    timestamps: false, 
  }
);

module.exports = Tags;
