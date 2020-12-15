'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Match.hasMany(models.Round, {
        foreignKey: 'matchId'
      })
      Match.hasMany(models.Team, {
        foreignKey: 'matchId'
      })
    }
  };
  Match.init({
    matchSteamId: DataTypes.STRING,
    map: DataTypes.STRING,
    playTime: DataTypes.FLOAT,
    serverName: DataTypes.STRING,
    clientName: DataTypes.STRING,
    tickRate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};