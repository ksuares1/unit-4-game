$(document).ready(function () {
    console.log("ready!");
});
// this game generates a random number between 0 and 99
var targetNumber = Math.floor(Math.random() * 100);

// Initialize the game:
var wins = 0;
var losses = 0;

var totalScore = 0;
$('#totScore').text(totScore);
// the crystals contain a value between 0 and 99
var blue = Math.floor(Math.random() * 99) + 1;
var amethyst = Math.floor(Math.random() * 99) + 1;
var emerald = Math.floor(Math.random() * 99) + 1;
var opal = Math.floor(Math.random() * 99) + 1;

function win() {
    wins = wins + 1;
    $('#wins').text(wins);
    resetTwo();
    reset();
}

function lose() {
    losses = losses + 1;
    $('#losses').text(losses);
    resetTwo();
    reset();
}

//When user clicks a gem, it will collect the totalSum=totalSum+gemValue
$('#blue').click(function () {
    totScore = totScore + blue
    $('#totScore').text(totScore);
    if (totScore === targetNumber) {
        win();
        reset();
    }
    else if (totalScore > targetNumber) {
        lose();
        reset();
    }
});

$('#blue').click(function () {
    totScore = totScore + blue
    $('#totScore').text(totScore);
    if (totScore === targetNumber) {
        win();
        reset();
    }
    else if (totalScore > targetNumber) {
        lose();
        reset();
    }
});
$('#amethyst').click(function () {
    totScore = totScore + blue
    $('#totScore').text(totScore);
    if (totScore === targetNumber) {
        win();
        reset();
    }
    else if (totalScore > targetNumber) {
        lose();
        reset();
    }
});
$('#green').click(function () {
    totScore = totScore + blue
    $('#totScore').text(totScore);
    if (totScore === targetNumber) {
        win();
        reset();
    }
    else if (totalScore > targetNumber) {
        lose();
        reset();
    }
});
$('#opal').click(function () {
    totScore = totScore + blue
    $('#totScore').text(totScore);
    if (totScore === targetNumber) {
        win();
        reset();
    }
    else if (totalScore > targetNumber) {
        lose();
        reset();
    }
});

