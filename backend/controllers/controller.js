const db = require('../query');

exports.getAllMatches = (req, res) => {
    db.getAllMatches().then(matches => {
        res.json(matches);
    });
};

exports.getMatchById = (req, res) => {
    db.getMatchById(req.params.matchId).then(match => {
        res.json(match);
    });
};
exports.getAllMatchesOfPlayerById = (req, res) => {
    db.getAllMatchesOfPlayerById(req.params.playerId).then(player => {
        res.json(player);
    })
}
exports.getAllRounds = (req, res) => {
    db.getAllRounds().then(rounds => {
        res.json(rounds);
    });
};
exports.getAllTeams = (req, res) => {
    db.getAllTeams().then(teams => {
        res.json(teams);
    });
};

exports.getAllPlayerInTeams = (req, res) => {
    db.getAllPlayerInTeams().then(playerInTeams => {
        res.json(playerInTeams);
    });
};

exports.getAllPlayers = (req, res) => {
    db.getAllPlayers().then(players => {
        res.json(players);
    });
};

exports.getAllPlayersOfMatch = (req, res) => {
    db.getAllPlayersOfMatch(req.params.matchId).then(players => {
        res.json(players);
    });
};

exports.getAllTeamsOfMatch = (req, res) => {
    db.getAllTeamsOfMatch(req.params.matchId).then(teams => {
        res.json(teams);
    });
};

exports.getAllRoundsOfMatch = (req, res) => {
    db.getAllRoundsOfMatch(req.params.matchId).then(rounds => {
        res.json(rounds);
    });
};

exports.getAllMatchesOfPlayer = (req, res) => {
    db.getAllMatchesOfPlayer(req.params.steamId).then(matches => {
        res.json(matches);
    });
};

exports.getAllPlayersOfTeam = (req, res) => {
    db.getAllPlayersOfTeam(req.params.teamId).then(players => {
        res.json(players);
    });
};

exports.getPlayerBySteamId = (req, res) => {
    db.getPlayerBySteamId(req.params.steamId).then(player => {
        res.json(player);
    });
};

exports.getPlayerIdBySteamId = (req, res) => {
    db.getPlayerIdBySteamId(req.params.steamId).then(playerId => {
        res.json(playerId);
    });
};
