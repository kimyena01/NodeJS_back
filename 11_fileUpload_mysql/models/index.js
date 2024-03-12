'use strict';

// const fs = require('fs');
// const path = require('path');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//sequelize 객체 선언시 매개변수로 정보들을 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {sequelize: sequelize, Sequelize: Sequelize}

db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
