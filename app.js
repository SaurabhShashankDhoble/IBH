const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req, res){
  res.sendFile(__dirname+"/home.html");
});


app.listen(process.env.PORT || 3000,function(req,res){
  console.log("Server is started...");
});
