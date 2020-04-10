var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
    //console.log(userClickedPattern);
})

function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    animatePress(randomChosenColour)
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed");
        },100);
    }
$(document).on("keydown",function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key To Restart");
        startOver();
    }
}







// function playAudio(colour){
//     switch (colour) {
//         case "red":
//             var red1 = new Audio("sounds/red.mp3");
//             red1.play();
//             break;
//         case "blue":
//             var blue1 = new Audio("sounds/blue.mp3");
//             blue1.play();
//             break;
//         case "green":
//             var green1 = new Audio("sounds/green.mp3");
//             green1.play();
//             break;
//         case "yellow":
//             var yellow1 = new Audio("sounds/yellow.mp3");
//             yellow1.play();
//             break;
//         default:
//             var wrong = new Audio("sounds/wrong.mp3");
//             wrong.play();
//     }
// }
// playAudio(randomChosenColour);