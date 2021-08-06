// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const script = require(__dirname + "/lib/script.js");



moment = require('moment'); // require
demoAyanda = require('demo-ayanda');


// Load the full build.
const _ = require('lodash');
const { printMessage } = require("demo-ayanda");



// const lowerCase = require('lodash.lowercase');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(request,respond){

  moment().format(); 

  demoAyanda.printMessage();
  
let now = moment();
moment();
 console.log(now.format("YYYY MM DD - hh:mm:ss a"));

 momentData = now.format("YYYY MM DD - hh:mm:ss a");


  respond.render("home",{packageData: momentData})

})













let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
