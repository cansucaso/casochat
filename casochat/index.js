var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// Retrieve
var MongoClient = require('mongodb').MongoClient;



app.get('/', function(req, res){
 	res.sendFile('/Users/caso/Desktop/casochatLocal/casochat/index.html');
 	console.log('selam');

	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
	  if(!err) {
	    console.log("We are connected");
/*
	    db.User.find({name: "caso"}, function(err, users) {
		  if( err || !users) 
		  	console.log("User can not found");
		  else 
		    console.log(users.name);
		});*/
	  }
	});

});

io.on('connection', function(socket){
	console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

