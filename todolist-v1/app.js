const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("ERROR, CURRENT DAY IS EQUAL TO: " + currentDay);
    }
    
    res.render('list', {kindOfDay: day});

});


app.listen(3000, function(){
    console.log("Server Started On Port 3000");
});