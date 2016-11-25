var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.get('/data', (req, res) => {
    var data = { name: "Stuart", abilities: "programmer", powerlevel: ">9000"}
    res.send(data);
    res.end("end");
});

app.post('/postdata', (req, res) => {
    var body = req.body;
    console.log("Name:" + body.team + " " + body.details);
    res.end("end");
});

app.use(express.static('public'));

var server = app.listen(8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

var io = require('./server-sockets').listen(server);