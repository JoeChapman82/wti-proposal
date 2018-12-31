const User = require('./user');

module.exports = (username, password, role) => {
    const user = new User({ username, password, role });
    return user.save();
};
