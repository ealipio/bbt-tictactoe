var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cors());

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
});