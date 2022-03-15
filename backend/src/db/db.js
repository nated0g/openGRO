const { Sequelize } = require('sequelize');
const Sql = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  logging: false 
})