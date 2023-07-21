const User = require('./User');
const Posts = require('./Posts');
const Tags = require('./Tags');
const FriendsList = require('./FriendsList');

FriendsList.belongsTo(User, { foreignKey: 'userId', as: 'user' });
FriendsList.belongsTo(User, { foreignKey: 'friendId', as: 'friend' });
Posts.belongsTo(User, { foreignKey: 'author_id' });
// Posts.belongsToMany(Tags, { through: 'PostTags', foreignKey: 'post_id' });
// Tags.belongsToMany(Posts, { through: 'PostTags', foreignKey: 'tag_id' });

module.exports = { User, Posts, Tags, FriendsList}