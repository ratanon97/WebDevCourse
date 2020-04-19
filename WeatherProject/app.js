const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=ba46a91517551297827291564921a346&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            console.log(weatherData);
        })
    });

    res.send("Server is up and running!");
})


app.listen(3000, function(){
    console.log("Server Started On Port 3000");
})