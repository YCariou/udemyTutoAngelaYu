let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];           // PATTERN DU JEU
let userClickedPattern = [];    // PATTERN DU JOUEUR
let level = 0;
let started = false;

$(document).keydown(function(){
    if(!started) {
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
});

/// RECUPERER L'ID DU BOUTON CLIQUE ///

$(".btn").on("click", function() {
    let userChosenColour = this.id;
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);  /// AJOUT DE LA COULEUR DU BOUTON CLIQUE DANS LE PATTERN DU JOUEUR ///
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {
    level++;
    $("#level-title").text("Level "+ level);
    userClickedPattern = [];
    
    let randomNumber = Math.floor((Math.random())*4);
    let randomChosenColour = buttonColours[randomNumber];


/// AJOUTER LA COULEUR DANS LE PATTERN ///

    gamePattern.push(randomChosenColour);


/// AJOUTER UN EFFET DE FLASH ///

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);


/// AJOUTER UN SON SELON LA COULEUR DANS LE PATTERN DU JEU ///

    playSound(randomChosenColour);

}   // Fin de la function nextSequence();


function checkAnswer(currentLevel) {
    
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
        console.log("Success");
        if(userClickedPattern.length===gamePattern.length) {
            console.log("New Sequence triggered");
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }
    else {
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key To Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

/// AJOUT DU SON ///

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


/// AJOUT DE L'EFFET BLANC LORS DU CLIC ///

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

