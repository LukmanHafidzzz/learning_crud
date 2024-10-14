// import sequelize, { Sequelize } from "sequelize";
const { Sequelize } = require("sequelize")

const db = new Sequelize('db_freelance_1','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;