const fs = require("fs");
const demofile = require("demofile");

// fs.readFile("test.dem", (err, buffer) => {
//     const demoFile = new demofile.DemoFile();
//
//     demoFile.stringTables.on("update", e => {
//         if (e.table.name === "userinfo" && e.userData != null) {
//             console.log("\nPlayer info updated:");
//             console.log(e.entryIndex, e.userData);
//         }
//     });
//
//     demoFile.parse(buffer);
// });

fs.readFile("test.dem", (err, buffer) => {
    const demoFile = new demofile.DemoFile();

    demoFile.gameEvents.on("player_death", e => {
        const victim = demoFile.entities.getByUserId(e.userid);
        const victimName = victim ? victim.name : "unnamed";

        // Attacker may have disconnected so be aware.
        // e.g. attacker could have thrown a grenade, disconnected, then that grenade
        // killed another player.
        const attacker = demoFile.entities.getByUserId(e.attacker);
        const attackerName = attacker ? attacker.name : "unnamed";

        const headshotText = e.headshot ? " HS" : "";

        console.log(`${attackerName} [${e.weapon}${headshotText}] ${victimName}`);
    });

    demoFile.parse(buffer);
});

/* Outputs:

Player info updated:
12 { unknown_lo: 4294967295,
  unknown_hi: 4294963202,
  xuid_lo: 17825793,
  xuid_hi: 3417033,
  name: 'HS',
  userId: 20,
  guid: 'STEAM_1:1:1708516',
  friendsId: 3417033,
  friendsName: '',
  fakePlayer: false,
  isHltv: false,
  customFiles: [ 0, 0, 0, 0 ],
  xuid: Long { low: 3417033, high: 17825793, unsigned: false } }

[repeated for other players]
*/

// const sequelize = require("../Config")
//
// // import User from "../Entities/User"
// const User = require("../Entities/User")

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://csgo:heslo@localhost:3306/csgo');

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
    await sequelize.sync();
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
    console.log(jane.toJSON());
})();