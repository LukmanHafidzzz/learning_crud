// import { Sequelize } from "sequelize";
// import db from "../config/AppConfig.js"

const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/AppConfig");

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

module.exports = User;

(async() => {
    await db.sync();
})();