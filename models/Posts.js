const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./User');
const Tags = require('./Tags');

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
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  getterMethods: { //getterMethods define custom behavior when accessing the properties of objects. Use post.TagName for the {{#each}} statement in .hbs for appending tag information to cards.
    tagNames() {
      if (this.Tags) {
        return this.Tags.map(tag => tag.tagName);
      }
      return [];
    }
  }
});

Posts.belongsTo(User, { foreignKey: 'author_id' });
Posts.belongsToMany(Tags, { through: 'PostTags', foreignKey: 'post_id' });
Tags.belongsToMany(Posts, { through: 'PostTags', foreignKey: 'tag_id' });

module.exports = Posts;
