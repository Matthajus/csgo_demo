const controller = require('../controllers/controller');
const express = require("express");

var router = express.Router();

router.get('/matches', controller.getAllMatches);
router.get('/matches/:steamId', controller.getAllMatchesOfPlayer);
router.get('/match/:matchId', controller.getMatchById);

router.get('/teams', controller.getAllTeams);
router.get('/teams/:matchId', controller.getAllTeamsOfMatch);

router.get('/rounds', controller.getAllRounds);
router.get('/rounds/:matchId', controller.getAllRoundsOfMatch);

router.get('/players_in_team', controller.getAllPlayerInTeams);

router.get('/players', controller.getAllPlayers);
router.get('/players/match/:matchId', controller.getAllPlayersOfMatch);
router.get('/players/team/:teamId', controller.getAllPlayersOfTeam);
router.get('/player/:steamId', controller.getPlayerBySteamId);
router.get('/playerMatches/:playerId', controller.getAllMatchesOfPlayerById);

router.get('/playerId/:steamId', controller.getPlayerIdBySteamId);
module.exports = router;
