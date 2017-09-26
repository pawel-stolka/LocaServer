var express = require('express');
var fs = require('fs');
var cors = require('cors');

var app = express();
var port = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Server works fine, dude!');
})

app.get('/getCup', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');

    var obj = (fs.readFileSync('public/data/worldcup.json'));
    res.send(obj);
    // var obj = JSON.parse(fs.readFileSync('public/data/worldcup.json'));
    // res.send(JSON.stringify(obj));
})





app.listen(port, function(err) {
    console.log('running app server on port ' + port);
    console.log('CORS-enabled web server listening on port  ' + port);
});