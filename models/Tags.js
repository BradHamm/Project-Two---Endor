const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Your Sequelize instance

const Tags = sequelize.define('Tags', {
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
  }
});

module.exports = Tags;
