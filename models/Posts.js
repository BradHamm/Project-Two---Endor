const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');


class Posts extends Model {} 
Posts.init({
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
 
}, {
  sequelize,
  modelName: 'posts',
  tableName: 'posts',
  timestamps: false,
  getterMethods: { //getterMethods define custom behavior when accessing the properties of objects. Use post.TagName for the {{#each}} statement in .hbs for appending tag information to cards.
    tagNames() {
      if (this.Tags) {
        return this.Tags.map(tag => tag.tagName);
      }
      return [];
    }
  }
});



module.exports = Posts;