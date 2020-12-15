const {Match} = require('./models')
const {Round} = require('./models')
const {Team} = require('./models')
const {PlayerInTeam} = require('./models')
const {Player} = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// Find all matches
// Raw SQL: SELECT * FROM "Matches";
const getAllMatches = async () => {
    const matches = await Match.findAll();
    console.log("All matches:", JSON.stringify(matches, null, 4));
    return matches;
}
// getAllMatches().then(() => console.log("Finish!"))

// Find all rounds
// Raw SQL: SELECT * FROM "rounds";
const getAllRounds = async () => {
    const rounds = await Round.findAll();
    console.log("All rounds:", JSON.stringify(rounds, null, 4));
    return rounds;
}
//getAllRounds().then(() => console.log("Finish!"))


// Find all teams
// Raw SQL: SELECT * FROM "Teams";
const getAllTeams = async () => {
    const teams = await Team.findAll();
    console.log("All teams:", JSON.stringify(teams, null, 4));
    return teams;
}
//getAllTeams().then(() => console.log("Finish!"))


// Find all playerinteams
// Raw SQL: SELECT * FROM "playerinteams";
const getAllPlayerInTeams = async () => {
    const playerInTeams = await PlayerInTeam.findAll();
    console.log("All playerinteams:", JSON.stringify(playerInTeams, null, 4));
    return playerInTeams;
}
//getAllPlayerInTeams().then(() => console.log("Finish!"))


// Find all players
// Raw SQL: SELECT * FROM "Players";
const getAllPlayers = async () => {
    const players = await Player.findAll();
    console.log("All players:", JSON.stringify(players, null, 4));
    return players;
}
// getAllPlayers().then(() => console.log("Finish!"))


// Find player by steamId
// Raw SQL: SELECT * FROM "Players" WHERE steamId = '???';
const getPlayerBySteamId = async (playerSteamId) => {
    const foundPlayer = await Player.findOne({
        where: {
            steamId: playerSteamId
        }
    });
    console.log("Player By SteamId: ", JSON.stringify(foundPlayer, null, 4));
    return foundPlayer;
}
// getPlayerBySteamId("STEAM_1:1:80015964").then(() => console.log("Finish!"))

// Find player if by steamId
// Raw SQL: SELECT id FROM "Players" WHERE steamId = '???';
const getPlayerIdBySteamId = async (steamId) => {
    const foundPlayer = await Player.findOne({
        where: {
            steamId: steamId
        }
    });
    console.log("Player id: ",foundPlayer.id);
    return foundPlayer.id;
}
// getPlayerIdBySteamId('STEAM_1:1:80015964').then(() => console.log("Finish!"))


// Create a new match
// Raw SQL: INSERT INTO "Matches" (id, matchSteamId, map, playTime, serverName, clientName, tickRate, createdAt, updatedAt) VALUES (DEFAULT, 'vertigo.dem', 'Vertigo', 2576.32, 'Valve CS:GO Poland Server (srcds055.189.2)', 'GOTV Demo', '64')
const addMatch = async (newMatch) => {
    const match = await Match.create({
        matchSteamId: newMatch.getMatchSteamId(),
        map: newMatch.getMap(),
        playTime: newMatch.getPlayTime(),
        serverName: newMatch.getServerName(),
        clientName: newMatch.getClientName(),
        tickRate: newMatch.getTickRate()
    })
    console.log("Match auto-generated ID:", match.id)
    return match.id;
}
//addMatch().then(() => console.log("Finish!"))


// Create a new round
// Raw SQL: INSERT INTO "Rounds" (matchId, number, typeOfEnd, winnerId, createdAt, updatedAt) VALUES (3, 2, 9, 2 ,"2020-12-08 15:52:45", "2020-12-09 10:52:52")
const addRound = async (newRound) => {
    const round = await Round.create({
        matchId: newRound.getMatchId(),
        number: newRound.getNumber(),
        typeOfEnd: newRound.getTypeOfEnd(),
        teamId: newRound.getTeamId()
    })
    console.log("Round auto-generated ID:", round.id)
    return round.id;
}
//addRound().then(() => console.log("Finish!"))


// Create a new team
// Raw SQL: INSERT INTO "Team" (matchId, teamSide, score, createdAt, updatedAt) VALUES (3, 'Terrorist', 5, "2020-12-08 12:52:45", "2020-12-09 13:52:52" )
const addTeam = async (newTeam) => {
    const team = await Team.create({
        matchId: newTeam.getMatchId(),
        teamSide: newTeam.getTeamSide(),
        score: newTeam.getScore(),
    })
    console.log("Team auto-generated ID:", team.id)
    return team.id;
}
//addTeam().then(() => console.log("Finish!"))


// Create a new player
// Raw SQL: INSERT INTO "Players" (id, steamId, nickName, rank, createdAt, updatedAt) VALUES (DEFAULT, 'STEAM_0:0:01234', 'Tkachuk', 3)
const addPlayer = async (newPlayer) => {
    const player = await Player.create({
        steamId: newPlayer.getSteamId(),
        nickName: newPlayer.getNickName(),
        rank: newPlayer.getRank()
    })
    console.log("Player auto-generated ID:", player.id)
    return player.id;
}
//addPlayer().then(() => console.log("Finish!"))

// Create a new playerInTeams
// Raw SQL: INSERT INTO "PlayerInTeams" (id, teamId, playerId, kills, assists, deaths, mvps, score, kill_death, createdAt, updatedAt) VALUES (DEFAULT, 2, 2, 5, 2, 1, 2, 20, 5)
const addPlayerInTeams = async (newPlayerInTeam) => {
    const playerInTeams = await PlayerInTeam.create({
        teamId: newPlayerInTeam.getTeamId(),
        playerId: newPlayerInTeam.getId(),
        kills: newPlayerInTeam.getKills(),
        assists: newPlayerInTeam.getAssists(),
        deaths: newPlayerInTeam.getDeaths(),
        mvps: newPlayerInTeam.getMvps(),
        score: newPlayerInTeam.getScore(),
        kill_death: newPlayerInTeam.getKill_Death()
    })
    console.log("PlayerInTeams auto-generated ID:", playerInTeams.id)
    return playerInTeams.id;
}
//addPlayerInTeams().then(() => console.log("Finish!"))


// Delete match with given id
// Raw SQL: DELETE FROM "Matches" WHERE id = ?
const deleteMatch = async (matchId) => {
    const destroyed = await Match.destroy({
        where: {
            id: matchId
        }
    })
    console.log("Destroyed match:", destroyed);
}
//deleteMatch().then(() => console.log("Finish!"))


// Delete round with given id
// Raw SQL: DELETE FROM "Rounds" WHERE id = ?
const deleteRound = async (roundId) => {
    const destroyed = await Round.destroy({
        where: {
            id: roundId
        }
    })
    console.log("Destroyed round:", destroyed);
}
//deleteRound().then(() => console.log("Finish!"))


// Delete team with given id
// Raw SQL: DELETE FROM "Teams" WHERE id = ?
const deleteTeam = async (teamId) => {
    const destroyed = await Team.destroy({
        where: {
            id: teamId
        }
    })
    console.log("Destroyed team:", destroyed);
}
//deleteTeam().then(() => console.log("Finish!"))


// Delete playerinteam with given id
// Raw SQL: DELETE FROM "PlayerInTeams" WHERE id = ?
const deletePlayerInTeam = async (playerInTeamId) => {
    const destroyed = await PlayerInTeam.destroy({
        where: {
            id: playerInTeamId
        }
    })
    console.log("Destroyed PlayerInTeam:", destroyed);
}
//deletePlayerInTeam().then(() => console.log("Finish!"))


// Delete player with given steamId
// Raw SQL: DELETE FROM "Players" WHERE steamId = ?
const deletePlayer = async (playerSteamId) => {
    const destroyed = await Player.destroy({
        where: {
            steamId: playerSteamId
        }
    })
    console.log("Destroyed Player:", destroyed);
}
//deletePlayer().then(() => console.log("Finish!"))


// Change player nickName with given steamId
// UPDATE "Players" SET nickName='???' WHERE steamId = 'STEAM_0:0:01457'
const updatePlayerNickNameBySteamId = async (playerSteamId, newName) => {
    const updated = await Player.update({nickName: newName}, {
        where: {
            steamId: playerSteamId
        }
    })
    console.log("Updated player nick:", updated);
}
//updatePlayerNickNameBySteamId().then(() => console.log("Finish!"))

// Find all rounds of match by given matchID
// Raw SQL: SELECT * FROM "Rounds" r JOIN "Matches" m ON r.matchId = m.id WHERE m.id = ???;;
const getAllRoundsOfMatch = async (matchId) => {
    const rounds = await Match.findOne({
        include: [{
            model: Round,
            required: true
        }],
        where: {
            id: matchId
        }
    })
    console.log("All rounds od match:", JSON.stringify(rounds, null, 4));
    return rounds;
}
// getAllRoundsOfMatch(1).then(() => console.log("Finish!"))
//
// Find all teams of match by given matchID
// Raw SQL: SELECT * FROM "Teams" t JOIN  "Matches" m ON t.matchId = m.id WHERE m.id = ???;
const getAllTeamsOfMatch = async (matchId) => {
    const teams = await Match.findOne({
        include: [{
            model: Team,
            required: true
        }],
        where: {
            id: matchId
        }
    })
    console.log("All teams of match:", JSON.stringify(teams, null, 4));
    return teams;
}
// getAllTeamsOfMatch(1).then(() => console.log("Finish!"))
//
// Find all players of match by given matchID
// Raw SQL: SELECT * from "Players" p JOIN "PlayerInTeams" pit ON p.id = pit.playerId JOIN "Teams" t ON pit.teamId = t.id JOIN "Matches" m ON t.matchId = m.id WHERE m.id = ???;
const getAllPlayersOfMatch = async (matchId) => {
    const players = await Match.findOne({
        include: [
            { model: Team, include: [{ model: PlayerInTeam, as: "PlayerInTeams", include: [{ model: Player, as: "Player" }] }]}
            ],
        where: {
            id: matchId
        }
    })
    console.log("All players of match:", JSON.stringify(players, null, 4));
    return players;
}
// getAllPlayersOfMatch(1).then(() => console.log("Finish!"))

// Find all matches of player by given playerSteamId
// Raw SQL: SELECT * FROM "Matches" m JOIN "Teams" t ON m.id = t.matchId JOIN "PlayerInTeams" pit ON t.id = pit.teamId JOIN "Players" p ON pit.playerId = p.id WHERE p.steamId = ???;
const getAllMatchesOfPlayer = async (playerSteamId) => {
    const matches = await Player.findOne({
        include: [
            // { model: PlayerInTeam, include: [{ model: Team, include: [{ model: Match }] }]}
            { model: PlayerInTeam }
        ],
        where: {
            steamId: playerSteamId
        }
    })
    console.log("All matches od player:", JSON.stringify(matches, null, 4));
    return matches;
}
// getAllMatchesOfPlayer("STEAM_1:1:80015964").then(() => console.log("Finish!"))

// Find all players of team by given teamID
// Raw SQL: SELECT * FROM "Players" p JOIN "PlayerInTeams" pit ON p.id = pit.playerId JOIN "Teams" t ON pit.teamId = t.id WHERE t.id = ???;
const getAllPlayersOfTeam = async (teamId) => {
    const players = await Team.findOne({
        include: [
            { model: PlayerInTeam, include: [{ model: Player }]}
        ],
        where: {
            id: teamId
        }
    })
    console.log("All players of team:", JSON.stringify(players, null, 4));
    return players;
}
// getAllPlayersOfTeam(1).then(() => console.log("Finish!"))

module.exports = {
    getAllMatches: getAllMatches,
    getAllRounds: getAllRounds,
    getAllTeams: getAllTeams,
    getAllPlayerInTeams: getAllPlayerInTeams,
    getAllPlayers: getAllPlayers,
    getPlayerBySteamId: getPlayerBySteamId,
    getPlayerIdBySteamId: getPlayerIdBySteamId,
    addMatch: addMatch,
    addRound: addRound,
    addTeam: addTeam,
    addPlayer: addPlayer,
    addPlayerInTeams: addPlayerInTeams,
    deleteMatch: deleteMatch,
    deleteRound: deleteRound,
    deleteTeam: deleteTeam,
    deletePlayerInTeam: deletePlayerInTeam,
    deletePlayer: deletePlayer,
    updatePlayerNickNameBySteamId: updatePlayerNickNameBySteamId,
    getAllRoundsOfMatch: getAllRoundsOfMatch,
    getAllTeamsOfMatch: getAllTeamsOfMatch,
    getAllPlayersOfMatch: getAllPlayersOfMatch,
    getAllMatchesOfPlayer: getAllMatchesOfPlayer,
    getAllPlayersOfTeam: getAllPlayersOfTeam
}
