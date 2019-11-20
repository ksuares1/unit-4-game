$(document).ready(function () {
    console.log("ready!");

    // this game generates a random number between 0 and 99
    var targetNumber = Math.floor(Math.random() * 100);
    console.log(targetNumber);
    $('.random').text(targetNumber);
    // Initialize the game:
    var wins = 0;
    var losses = 0;

    var totalScore = 0;
    console.log('hello');
    console.log(totScore);
    $('#totScore').text(totScore);
    // the crystals contain a value between 0 and 99
    var blue = Math.floor(Math.random() * 99) + 1;
    var amethyst = Math.floor(Math.random() * 99) + 1;
    var green = Math.floor(Math.random() * 99) + 1;
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
        reset();
        resetTwo();
    }

    //When user clicks a gem, it will collect the totalSum=totalSum+gemValue totalSum+=gemValue
    $('#blue').click(function () {
        totalScore += blue;
        console.log(totalScore);
        console.log(blue .totScore);
        $('#totScore').text(totalScore);
        if (totalScore === targetNumber) {
            console.log('You won!');
            win();
            reset();
            resetTwo();
        }
        else if (totalScore > targetNumber) {
            console.log("You lost!");
            lose();
            reset();
            resetTwo();

        }
    });

    $('#amethyst').click(function () {
        totalScore += amethyst;
        $('#totScore').text(totalScore);
        if (totalScore === targetNumber) {
            console.log("You won!");
             win();
            reset();
            resetTwo();
        }
        else if (totalScore > targetNumber) {
            console.log("You lost!");
            lose();
            reset();
            resetTwo();
        }
    });
    $('#green').click(function () {
        totalScore += green
        $('#totScore').text(totalScore);
        if (totalScore === targetNumber) {
            console.log('You won!');
            win();
            reset();
            resetTwo();
        }
        else if (totalScore > targetNumber) {
            console.log("You lost!");
            lose();
            reset();
            resetTwo();
        }
    });
    $('#opal').click(function () {
        totalScore += opal
        $('#totScore').text(totalScore);
        if (totalScore === targetNumber) {
            console.log("You won!");
            win();
            reset();
            resetTwo();
        }
        else if (totalScore > targetNumber) {
            console.log("You lost!");
            lose();
            reset();
            resetTwo();
        }
    });

    function reset() {
        totalScore = 0
        $('#totScore').text(totalScore);
    }

    // When the game is restarted, the page does not reload
    function resetTwo() {
        targetNumber = Math.floor(Math.random() * 100);
        $('#targetNum').html(targetNumber);
        blue= Math.floor(Math.random() * 99) + 1;
        amethyst = Math.floor(Math.random() * 99) + 1;
        green = Math.floor(Math.random() * 99) + 1;
        opal = Math.floor(Math.random() * 99) + 1;
    };

});
