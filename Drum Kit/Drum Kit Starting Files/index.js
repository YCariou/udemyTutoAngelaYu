var numberOfDrumButtons = document.querySelectorAll(".drum");       // Je sélectionne tous les éléments qui possèdent la classe .drum; je récupère ici un array

for (var i=0; i<numberOfDrumButtons.length; i++) {                  // J'utilise une boucle pour ajouter à chaque élément la possibilité de cliquer dessus pour déclencher un event
    numberOfDrumButtons[i].addEventListener("click", function(){    // J'ajoute l'event "click"

        var buttonInnerHTML = this.innerHTML;                       // Pour chaque élément, je récupère la valeur HTML
        console.log(this);                                          // Je vois ici que je récupère la balise HTML, il me faut donc rajouter innerHTML pour récupérer seulement la lettre comprise dans les balises
        console.log(this.innerHTML);                                // Je vois ici que j'ai bien récupéré la valeur de la lettre associée
        makeSound(buttonInnerHTML);                                 // Je lance la fonction qui va faire un son en fonction de l'élément cliqué; le paramètre est donc une lettre
        buttonAnimation(buttonInnerHTML);                     
    });
}

document.addEventListener("keydown",function(e){                    // J'ajoute ici un event qui se lance lorsque j'appuie sur une touche du clavier
    console.log(e);                                                 // Je vois ici les propriétés de l'event que j'utilise, grâce au console.log et comme je vois qu'il s'agit d'un "objet", je vois que je dois agir sur la propriété key pour récupérer la lettre associée
    console.log(e.key);                                             // Je vois ici que j'ai bien récupéré la valeur de la lettre associée
    makeSound(e.key);                                               // Je lance la fonction qui va faire un son en fonction de la touche sur laquelle j'ai appuyé; le paramètre contient donc la lettre associée
    buttonAnimation(e.key);
});

    function makeSound(key) {

        switch (key) {                                              // J'utilise un switch pour plus de clarté dans le code
            case "w":                                               // Ici je demande au code de réagir soit en fonction de l'élément sur lequel j'ai cliqué, soit selon la touche sur laquelle j'ai appuyé, dans les 2 cas, le code reconnait la lettre associée
                var tom1 = new Audio('sounds/tom-1.mp3');           // Je crée les sons grâce à un constructeur que je stocke dans une variable
                tom1.play();                                        // Je lui demande de jouer le son
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
        
            default: console.log(buttonInnerHTML);
                break;
    }};
    

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function() {
        activeButton.classList.toggle("pressed");
    }, 100);
}