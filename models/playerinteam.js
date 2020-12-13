'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerInTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlayerInTeam.belongsTo(models.Team, {
        foreignKey: 'teamId'
      })
      PlayerInTeam.belongsTo(models.Player, {
        foreignKey: 'playerId'
      })
    }
  };
  PlayerInTeam.init({
    teamId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    kills: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    deaths: DataTypes.INTEGER,
    mvps: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    kill_death: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'PlayerInTeam',
  });
  return PlayerInTeam;
};