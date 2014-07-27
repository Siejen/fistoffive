// this has all of the routes

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
// Middleware
app.use(bodyParser.urlencoded());

var model = [];


app.get("/student", function(req, res){
  res.render("student", {})    
});

app.post("/fist", function(req, res){
  console.log( req.body.ranking);
  model.push(parseInt(req.body.ranking));
  console.log(model);
  // model.push
  res.redirect("/results")
});

app.get("/results", function(req, res){
  res.render("results", {avg : 3.14, min: 1, max: 5, num: 26});    
});


app.listen(3000, function(){
  console.log("THE SERVER IS LISTENING ON localhost:3000");
});
