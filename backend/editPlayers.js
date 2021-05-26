const uuid = require("uuid");
const jsonIO = require('./jsonIO');

module.exports.getAllPlayers = () => {
    const players = jsonIO.readJSONFile();
    return players;
}

module.exports.addPlayer = player => {
    const players = jsonIO.readJSONFile();
    player.id = uuid.v4.apply();
    players.push(player)
    jsonIO.writeJSONFile(players);
    return player;
}

module.exports.updatePlayer = (id, player) => {
    const players = jsonIO.readJSONFile();
    players.forEach((x, i) => {
        if(x.id === id) {
            x.name = player.name;
            x.title = player.title;
            x.description = player.description;
            console.log('found');
        }
        console.log(x.id, id, typeof(x.id), typeof(id));
    })
    jsonIO.writeJSONFile(players);
    return player;
}

module.exports.deletePlayer = id => {
    const players = jsonIO.readJSONFile();
    let exists = 0;
    for(let i = 0; i < players.length; i++) {
        if(players[i].id === id) {
            exists = 1;
            players.splice(i, 1);
            break;
        }
    }
    jsonIO.writeJSONFile(players);
    return exists;
}
