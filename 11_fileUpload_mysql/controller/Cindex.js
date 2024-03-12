const models = require('../models/index');

exports.main = (req, res) => {
    res.render('index', {title: "mysql과 file업로드 확인, sequelize"});
}