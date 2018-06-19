// Global

// User selects their character and opponent
var characterSelected = false;
var defenderSelected = false;

// Stores users selected characters
var character = {};
var defender = {};

// Number of opponents beaten
var enemiesDefeated = 0;

// Determines if game is over
gameOver = false;

// Characters

var goku = {
    name: "Goku",
    hp: 150,
    atk: 20,
    counteratk: 20,
};

var vegeta = {
    name: "Vegeta",
    hp: 120,
    atk: 8,
    counteratk: 8,
};

var piccolo = {
    name: "Piccolo",
    hp: 100,
    atk: 5,
    counteratk: 5,
};

var frieza = {
    name: "Frieza",
    hp: 180,
    atk: 25,
    counteratk: 25,
};

// Functions


function initializeCharacter(characterSelected) {
    character.name = characterSelected.name;
    character.hp = characterSelected.hp;
    character.atk = characterSelected.atk;
    character.counteratk = characterSelected.counteratk;
};

function initializeDefender(defenderSelected) {
    defender.name = defenderSelected.name;
    defender.hp = defenderSelected.hp;
    defender.atk = defenderSelected.atk;
    defender.counteratk = defenderSelected.counteratk;
};

function moveToEnemies() {
    $(".selectable-character").removeClass("selectable-character").addClass("selectable-enemy");
    $("#enemies-available").append($(".selectable-enemy"));
}

function resetGame() {
    $("#goku-char").children(".health").html(goku.hp);
    $("#vegeta-char").children(".health").html(vegeta.hp);
    $("#piccolo-char").children(".health").html(piccolo.hp);
    $("#frieza-char").children(".health").html(frieza.hp);

    $(".character-image").removeClass("selected-character selectable-enemy selected-defender").addClass("selectable-character");
    var selectable = $(".selectable-character").show();
    $("#characters-available").html(selectable);

    $("#game-message").empty();
    $("#restart").hide();

    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;

    character = {};
    defender = {};
}

// Main Routine

$(document).ready(function() {

    $("#restart").hide();

    $("#goku-char").on("click", function () {
        console.log("User has selected Goku!");

        if(characterSelected == false) {
            $("#game-message").empty();

            initializeCharacter(goku);
            characterSelected = true;

            $("#goku-char").removeClass("selectable-character").addClass("selected-character");
            $("#player-character").append(this);

            moveToEnemies();
        } else if ((characterSelected === true) && (defenderSelected === false)) {

            if($("#goku-char").hasClass("selectable-enemy")) {
                $("#game-message").empty();

                initializeDefender(goku);
                defenderSelected = true;

                $("#goku-char").removeClass("selectable-enemy").addClass("selected-defender");
                $("#defender-area").append(this);
            }
        }
    });

    $("#vegeta-char").on("click", function () {
        console.log("User has selected Vegeta!");

        if(characterSelected == false) {
            $("#game-message").empty();

            initializeCharacter(vegeta);
            characterSelected = true;

            $("#vegeta-char").removeClass("selectable-character").addClass("selected-character");
            $("#player-character").append(this);

            moveToEnemies();
        } else if ((characterSelected === true) && (defenderSelected === false)) {

            if($("#vegeta-char").hasClass("selectable-enemy")) {
                $("#game-message").empty();

                initializeDefender(vegeta);
                defenderSelected = true;

                $("#vegeta-char").removeClass("selectable-enemy").addClass("selected-defender");
                $("#defender-area").append(this);
            }
        }
    });

    $("#piccolo-char").on("click", function () {
        console.log("User has selected Piccolo!");

        if(characterSelected == false) {
            $("#game-message").empty();

            initializeCharacter(piccolo);
            characterSelected = true;

            $("#piccolo-char").removeClass("selectable-character").addClass("selected-character");
            $("#player-character").append(this);

            moveToEnemies();
        } else if ((characterSelected === true) && (defenderSelected === false)) {

            if($("#piccolo-char").hasClass("selectable-enemy")) {
                $("#game-message").empty();

                initializeDefender(piccolo);
                defenderSelected = true;

                $("#piccolo-char").removeClass("selectable-enemy").addClass("selected-defender");
                $("#defender-area").append(this);
            }
        }
    });

    $("#frieza-char").on("click", function () {
        console.log("User has selected Frieza!");

        if(characterSelected == false) {
            $("#game-message").empty();

            initializeCharacter(frieza);
            characterSelected = true;

            $("#frieza-char").removeClass("selectable-character").addClass("selected-character");
            $("#player-character").append(this);

            moveToEnemies();
        } else if ((characterSelected === true) && (defenderSelected === false)) {

            if($("#frieza-char").hasClass("selectable-enemy")) {
                $("#game-message").empty();

                initializeDefender(frieza);
                defenderSelected = true;

                $("#frieza-char").removeClass("selectable-enemy").addClass("selected-defender");
                $("#defender-area").append(this);
            }
        }
    });

    $("#attack").on("click", function(){
        console.log("User attacks!");

        if (characterSelected && defenderSelected && !gameOver) {
            defender.hp = defender.hp - character.atk;
            $(".selected-defender").children(".health").html(defender.hp);
            $("#game-message").html("<p>You attacked " + defender.name + " for " + character.atk + " damage!</p>");

            character.atk = character.atk + character.counteratk;

            if (defender.hp > 0) {
                character.hp = character.hp - defender.atk;
                $(".selected-character").children(".health").html(character.hp);
            

            if (character.hp > 0) {
                $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.counteratk + " damage!");
            } else {
                gameOver = true;
                $("#game-message").html("<p>Oh no! You've been defeated!</p><p>Don't you want a rematch?</p>");
                $("#restart").show();
            }
        } else {
            enemiesDefeated++;
            defenderSelected = false;
            $("#game-message").html("<p>You have defeated " + defender.name + "! Choose your next opponent!");
            $(".selected-defender").hide();

            if (enemiesDefeated === 3) {
                gameOver = true;
                $("#game-message").html("<p>Congratulations! You're the strongest warrior in the universe! Try again with a different fighter!</p>")
                $("#restart").show();
            }

        }
    } else if (!characterSelected && !gameOver) {
        $("#game-message").html("<p> You need to pick a character first</p>");
    } else if (!defenderSelected && !gameOver) {
        $("#game-message").html("<p> You need to select an opponent first</p>");
    }
        
});

$("#restart").on("click", function() {
    console.log("User restarted");

    location.reload();
});

});