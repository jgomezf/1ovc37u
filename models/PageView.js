const mongoose = require('mongoose');

const PageViewScheme = mongoose.Schema({
    path: {type: String},
    date: {type: Date},
    userAgent: {type: String},
});

module.exports = mongoose.model("PageView",PageViewScheme);
