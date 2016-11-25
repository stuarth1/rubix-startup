var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/weather', (req, res) => {
    var city = [{name: "Toronto", pressure: "111", tempurature: "4", humidity: "10"},{name: "Hamilton", pressure: "222", tempurature: "1", humidity: "5"},]
    res.render("weather", {city});
});

app.get('/form', (req, res) => {
    res.render("form");
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
app.post('/postform', (req, res) => {
    var body = req.body;
    console.log("Name: " + body.name + ", Company: " + body.company + ", Email: " + body.email + ", Address: " + body.address + ", City: " + body.city + ", Country: " + body.country);
    res.render("index");
});


app.use(express.static('public'));

var server = app.listen(8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

var io = require('./server-sockets').listen(server);