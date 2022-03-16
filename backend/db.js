const Sequelize = require('sequelize');
process.env.NODE_ENV = 'development';
const dbconfig = require('./config/config.js')

const sequelize = new Sequelize(dbconfig["development"]);

module.exports = sequelize;