const User = require('./user');

module.exports = {
    all: () => User.find({}, 'username role'),
    dump: () => User.find({}),
    byId: (id) => User.findById(id),
    byUsername: (username) => User.findOne({ username }, 'username'),
    toAuthenticate: (username) => User.findOne({ username })
};
