// this has all of the routes

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
// Middleware
app.use(bodyParser.urlencoded());

var model = [];

var avg = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  var currentAvg = sum/(arr.length);
  return currentAvg;
}

var min = function(arr) {
  var currentMin = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < currentMin) {
      var currentMin = arr[i];
    }
  };
  return currentMin;
}

var max = function(arr) {
  var currentMax = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > currentMax) {
      var currentMax = arr[i];
    }
  };
  return currentMax;
}

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
  console.log(model);
  var theMin = min(model);
  var theMax = max(model);
  var theAvg = avg(model);

  res.render("results", {avg : theAvg, min: theMin, max: theMax, num: model.length});    
});

app.listen(3000, function(){
  console.log("THE SERVER IS LISTENING ON localhost:3000");
});
