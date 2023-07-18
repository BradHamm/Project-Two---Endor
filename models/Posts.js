const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const Posts = sequelize.define('Posts', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  body: {
    type: DataTypes.STRING(1000),
    allowNull: false
  }
});

Posts.belongsTo(User, { foreignKey: 'author_id' });

module.exports = Posts;
