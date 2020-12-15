const fs = require("fs");
const demofile = require("demofile");
const recordedDemo = "backend/test_3.dem";
const query = require('../query')

class Match {
    constructor(matchSteamId, map, playTime, serverName, clientName, tickRate) {
        this.id = 0
        this.matchSteamId = matchSteamId
        this.map = map
        this.playTime = playTime
        this.serverName = serverName
        this.clientName = clientName
        this.tickRate = tickRate
    }

    getId() {
        return this.id
    }

    getMatchSteamId() {
        return this.matchSteamId
    }

    getMap() {
        return this.map
    }

    getPlayTime() {
        return this.playTime
    }

    getServerName() {
        return this.serverName
    }

    getClientName() {
        return this.clientName
    }

    getTickRate() {
        return this.tickRate
    }

    setId(id) {
        this.id = id
    }
}

class Team {
    constructor(matchId, teamSide, score, teamNumber) {
        this.id = 0
        this.matchId = matchId
        this.teamSide = teamSide
        this.score = score
        this.teamNumber = teamNumber
    }

    getId() {
        return this.id
    }

    getMatchId() {
        return this.matchId
    }

    getTeamSide() {
        return this.teamSide
    }

    getScore() {
        return this.score
    }

    getTeamNumber() {
        return this.teamNumber
    }

    setId(id) {
        this.id = id
    }
}

class Round {
    constructor(matchId, number, typeOfEnd, teamNumber) {
        this.id = 0
        this.matchId = matchId
        this.number = number
        this.typeOfEnd = typeOfEnd
        this.teamNumber = teamNumber
        this.teamId = 0
    }

    getId() {
        return this.id
    }

    getMatchId() {
        return this.matchId
    }

    getNumber() {
        return this.number
    }

    getTypeOfEnd() {
        return this.typeOfEnd
    }

    getTeamNumber() {
        return this.teamNumber
    }

    getTeamId() {
        return this.teamId
    }

    setId(id) {
        this.id = id
    }

    setTeamId(id) {
        this.teamId = id
    }
}

class Player {
    constructor(steamId, nickName, rank, kills, assists, deaths, mvps, score, kill_death, teamNumber) {
        this.id = 0
        this.steamId = steamId
        this.nickName = nickName
        this.rank = rank
        this.kills = kills
        this.assists = assists
        this.deaths = deaths
        this.mvps = mvps
        this.score = score
        this.kill_death = kill_death
        this.teamNumber = teamNumber
        this.teamId = 0
        this.playerInTeamId = 0
    }

    getId() {
        return this.id
    }

    getSteamId() {
        return this.steamId
    }

    getNickName() {
        return this.nickName
    }

    getRank() {
        return this.rank
    }

    getKills() {
        return this.kills
    }

    getAssists() {
        return this.assists
    }

    getDeaths() {
        return this.deaths
    }

    getMvps() {
        return this.mvps
    }

    getScore() {
        return this.score
    }

    getKill_Death() {
        return this.kill_death
    }

    getTeamNumber() {
        return this.teamNumber
    }

    getTeamId() {
        return this.teamId
    }

    getPlayerInTeamId() {
        return this.playerInTeamId
    }

    setId(id) {
        this.id = id
    }

    setTeamId(id) {
        this.teamId = id
    }

    setPlayerInTeamId(id) {
        this.playerInTeamId = id
    }

}


let match;
let team_1;
let team_2;
let player1, player2, player3, player4, player5, player6, player7, player8, player9, player10;
let players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10]
var rounds = []
let counter = 1;
fs.readFile(recordedDemo, (err, buffer) => {
    const demoFile = new demofile.DemoFile();

    /* Parsujeme začiatok dema */
    /* Zistujeme základne info o zápase */
    demoFile.on("start", () => {
        match = new Match(recordedDemo, demoFile.header.mapName, demoFile.header.playbackTime, demoFile.header.serverName, demoFile.header.clientName, demoFile.tickRate)

        console.log("[Match] - %s\nserverName: %s\nclientName: %s\nmapName: %s\nplaybackTime: %s sec", match.getMatchSteamId(), match.getServerName(), match.getClientName(), match.getMap(), match.getPlayTime());
        console.log("Tick rate:", match.getTickRate());

        /* Vloženie zápasu do databázy */
        query.addMatch(match).then(id => {
            match.setId(id)
        })

        // Stop parsing - we're finished
        demoFile.cancel();
    });

    let round_processing_enabled = false
    demoFile.gameEvents.on("round_announce_match_start", () => {
        round_processing_enabled = true
    });

    demoFile.gameEvents.on("round_end", round_end => {
        if (round_processing_enabled) {
            console.log("\n                     ", counter, "******** ROUND ********", counter, "\n");
            console.log("*** Round ended '%s' (reason: %s, time: %d seconds) \n", demoFile.gameRules.phase, round_end.reason, demoFile.currentTime);
            try {
                for (let i = 3; i < 13; i++) {
                    const p = demoFile.entities.getByUserId(i);
                    players[i - 3] = new Player(p.steamId, p.name, 0, p.kills, p.assists, p.deaths, p.mvps, p.score, p.kills / p.deaths, p.teamNumber)
                    console.log("%s: %s -> kills: %d -> assists: %d -> deaths: %d -> mvps: %d -> score: %d", p.team.teamName, players[i - 3].getNickName(), players[i - 3].getKills(), players[i - 3].getAssists(), players[i - 3].getDeaths(), players[i - 3].getMvps(), players[i - 3].getScore());
                }
            } catch (e) {
                console.log("chyba")
            }

            console.log("And the winner is: ", round_end.winner)
            let newRound = new Round(match.getId(), counter, round_end.reason, round_end.winner)
            rounds.push(newRound)
            counter++
        }
    });

    demoFile.gameEvents.on("announce_phase_end", () => {
        const teams = demoFile.teams;

        const terrorists = teams[2];
        const cts = teams[3];

        team_1 = new Team(match.getId(), terrorists.teamName, terrorists.score, terrorists.teamNumber)
        team_2 = new Team(match.getId(), cts.teamName, cts.score, cts.teamNumber)

        console.log(
            "\t%dTerrorists: %s score %d\n\t%dCTs: %s score %d",
            team_1.getTeamNumber(),
            team_1.getTeamSide(),
            team_1.getScore(),
            team_2.getTeamNumber(),
            team_2.getTeamSide(),
            team_2.getScore()
        );
    });

    demoFile.on("end", () => {
        console.log("end event");
        counter = 1

        query.addTeam(team_1).then(id => {
            team_1.setId(id)
        })
        query.addTeam(team_2).then(id => {
            team_2.setId(id)
        })

        setTimeout(function () {
            for (let i = 0; i < players.length; i++) {
                // if player in not in our database we add him, otherwise we get his id and update his nickName
                query.getPlayerBySteamId(players[i]).then(p => {
                    if (JSON.stringify(p, null, 4) === "[]") {
                        query.addPlayer(players[i]).then(id => {
                            players[i].setId(id)
                        })
                    } else {
                        query.getPlayerIdBySteamId(players[i].getSteamId()).then(id => {
                            players[i].setId(id)
                        })
                        query.updatePlayerNickNameBySteamId(players[i].getSteamId(), players[i].getNickName()).then(() => {
                        })
                    }
                })

                if (players[i].getTeamNumber() === team_1.getTeamNumber()) {
                    players[i].setTeamId(team_1.getId())
                } else {
                    players[i].setTeamId(team_2.getId())
                }
            }
        }, 2000);

        setTimeout(function () {
            for (let i = 0; i < players.length; i++) {
                query.addPlayerInTeams(players[i]).then(id => {
                    players[i].setPlayerInTeamId(id)
                })
            }
        }, 6000);

        setTimeout(function () {
            for (let i = 0; i < rounds.length; i++) {
                if (counter > 15) {
                    if (rounds[i].getTeamNumber() === team_1.getTeamNumber()) {
                        rounds[i].setTeamId(team_1.getId())
                    } else {
                        rounds[i].setTeamId(team_2.getId())
                    }
                    query.addRound(rounds[i]).then(id => {
                        rounds[i].setId(id)
                    })
                    counter++
                } else {
                    if (rounds[i].getTeamNumber() === team_1.getTeamNumber()) {
                        rounds[i].setTeamId(team_2.getId())
                    } else {
                        rounds[i].setTeamId(team_1.getId())
                    }
                    query.addRound(rounds[i]).then(id => {
                        rounds[i].setId(id)
                    })
                    counter++
                }
            }
        }, 10000);

    });

    demoFile.parse(buffer)
});
