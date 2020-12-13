'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.PlayerInTeam, {
        foreignKey: 'teamId'
      })
      Team.belongsTo(models.Match, {
        foreignKey: 'matchId'
      })
    }
  };
  Team.init({
    matchId: DataTypes.INTEGER,
    teamSide: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};