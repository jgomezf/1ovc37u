const PageView = require("../models/PageView");

const registerView = async (req, res, next) => {
    const date = new Date().toLocaleString();
    const data = {
        path: req.path,
        date: date,
        userAgent: req.headers["user-agent"],
    };

    try {
        const reg = new PageView(data);
        await reg.save();
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { registerView };