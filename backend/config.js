const { Sequelize, Model, DataTypes } = require('sequelize');
let sequelize = new Sequelize('mysql://csgo:heslo@localhost:3306/csgo');
export default sequelize;