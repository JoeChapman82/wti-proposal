const Record = require('./record');

module.exports = {
    count: () => Record.find({}).count(),
    all: () => Record.find({}),
    dump: () => Record.find({}),
    byId: (id) => Record.findById(id),
    byQuery: (query) => Record.find(query)
};
