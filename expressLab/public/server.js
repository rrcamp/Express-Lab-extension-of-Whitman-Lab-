var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//body parser is needed to handle post requests
var quotes = require('./stuff');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//this configures express to use body-parser as middleware


app.get('/stuff', function (request, response){
  response.send(quotes.quotes())
});

var server = app.listen(8888, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('hello world');
});




app.post('/login', function(request, response){
  var username = request.body.id;

  response.send(username);

});
