const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require("../Config")

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

export default User;