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
    $("#characters-available").html(available);

    $("#game-message").empty();

    var characterSelected = false;
    var defenderSelected = false;

    var character = {};
    var defender = {};
}

// Main Routine

$(document).ready(function(){

    $("#goku-char").on("click", function (){
        console.log("User has selected Goku!");
    })
})