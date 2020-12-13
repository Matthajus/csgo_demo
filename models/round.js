'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Round.belongsTo(models.Team, {
        foreignKey: 'teamId'
      })
      Round.belongsTo(models.Match, {
        foreignKey: 'matchId'
      })
    }
  };
  Round.init({
    matchId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    typeOfEnd: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};