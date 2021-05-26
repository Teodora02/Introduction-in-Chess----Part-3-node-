const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const editPlayers = require('./editPlayers');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('../frontend'));

app.listen(port, () => {
    console.log(`Started on http://localhost:${port}`);
});

app.get('/players', (req, res) => {
    res.send(editPlayers.getAllPlayers());
});

app.post('/players', (req, res) => {
    res.send(editPlayers.addPlayer(req.body));
});

app.put('/players/:id', (req, res) => {
    editPlayers.updatePlayer(req.params.id, req.body);
    res.send(req.body);
})

app.delete('/players/:id', (req, res) => {
    editPlayers.deletePlayer(req.params.id);
    res.send(req.body);
})



