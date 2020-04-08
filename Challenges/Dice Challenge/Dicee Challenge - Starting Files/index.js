var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6)+1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6)+1;
randomNumber2 = Math.floor(randomNumber2);

//STRING CONCATNATION VERSION
var leftImage = document.querySelector(".img1");
var imageLeftText = "images/dice"+randomNumber1+".png";
leftImage.setAttribute("src",imageLeftText);

var rightImage = document.querySelector(".img2");
var imageRightText = "images/dice"+randomNumber2+".png";
rightImage.setAttribute("src",imageRightText);


// IF ELSE VERSION
// var leftImage = document.querySelector(".img1");
//     if (randomNumber1===1){
//         leftImage.setAttribute("src","images/dice1.png")
//     } else if (randomNumber1===2){
//         leftImage.setAttribute("src","images/dice2.png")
//     }
//     else if (randomNumber1===3){
//         leftImage.setAttribute("src","images/dice3.png")
//     }
//     else if (randomNumber1===4){
//         leftImage.setAttribute("src","images/dice4.png")
//     }
//     else if (randomNumber1===5){
//         leftImage.setAttribute("src","images/dice5.png")
//     }
//     else if (randomNumber1===6){
//         leftImage.setAttribute("src","images/dice6.png")
//     }
// var rightImage = document.querySelector(".img2");
//     if (randomNumber2===1){
//         rightImage.setAttribute("src","images/dice1.png")
//     } else if (randomNumber2===2){
//         rightImage.setAttribute("src","images/dice2.png")
//     }
//     else if (randomNumber2===3){
//         rightImage.setAttribute("src","images/dice3.png")
//     }
//     else if (randomNumber2===4){
//         rightImage.setAttribute("src","images/dice4.png")
//     }
//     else if (randomNumber2===5){
//         rightImage.setAttribute("src","images/dice5.png")
//     }
//     else if (randomNumber2===6){
//         rightImage.setAttribute("src","images/dice6.png")
//     }

var titleImage = document.querySelector("h1");
    if (randomNumber1 > randomNumber2){
        titleImage.innerHTML = "Player 1 Wins!!"
    } else if(randomNumber1 < randomNumber2){
        titleImage.innerHTML = "Player 2 Wins!!"
    } else if (randomNumber1 === randomNumber2){
        titleImage.innerHTML = "ITS A DRAW!"
    }