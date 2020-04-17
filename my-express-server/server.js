const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hey</h1>");
});

app.get("/contact", function(req,res){
    res.send("<h1>Contact Me at ratanon97@hotmail.com</h1>");
});

app.get("/bio", function(req,res){
    res.send("<h1>Imperial College London Graduate</h1>");
});

app.get("/hobbies", function(req,res){
    res.send("<h1>Coffee.Code.Books.Anime.Metal.Energy.</h1>");
});


app.listen(3000, function(){
    console.log("Server started on Port 3000");
});