// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Could not get the seperate "htmlRoutes.js" to show up so the routes are here as well
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Create an empty array
var friends = [];

// Used for displaying the array of friends in json format
app.get("/api/friends", function(req, res){

	return res.json(friends);
	
});

// Takes the info from the body and pushes it to the friends array
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);

  console.log(friends);
});


// Listening for the port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});