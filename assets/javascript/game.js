// random number generators (functions & variables)
// ===================================================================

const randNumGen = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randNumber = randNumGen(19, 120);

const randGem1 = () => {
    return Math.floor(1 + Math.random() * 12);
}

let gem1 = randGem1();

const randGem2 = () => {
    return Math.floor(1 + Math.random() * 12);
}

let gem2 = randGem2();

const randGem3 = () => {
    return Math.floor(1 + Math.random() * 12);
}

let gem3 = randGem3();

const randGem4 = () => {
    return Math.floor(1 + Math.random() * 12);
}

let gem4 = randGem4();

// console.log() values to see that functions are working
console.log(randNumber);
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);

// total score count
let totalScore = 0;

// win & loss count
let wins = 0;
let losses = 0;

// win function
const win = () => {
    wins++;
    $("#wins").text(wins);
    alert("You win! Play again!");
    totalScore = 0;
    $("#score").text(totalScore);
    randNumber = randNumGen(19, 120);
    $("#number").text(randNumber);
    gem1 = randGem1();
    gem2 = randGem2();
    gem3 = randGem3();
    gem4 = randGem4();
    console.log(randNumber);
    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);
}

// lose function
const lose = () => {
    losses++;
    $("#losses").text(losses);
    alert("You lose! Play again!");
    totalScore = 0;
    $("#score").text(totalScore);
    randNumber = randNumGen(19, 120);
    $("#number").text(randNumber);
    gem1 = randGem1();
    gem2 = randGem2();
    gem3 = randGem3();
    gem4 = randGem4();
    console.log(randNumber);
    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);
}

// start of jQuery 
// =======================================================================

$(window).on('load', function() {
    $("#number").text(randNumber);
});

$(document).ready(function() {

    $("#gem-1").on('click', function() {
        totalScore += gem1;
        $("#score").text(totalScore);
        if (totalScore === randNumber) {
            setTimeout(win, 100);
        } else if (totalScore > randNumber) {
            setTimeout(lose, 100);
        }
    });
    $("#gem-2").on('click', function() {
        totalScore += gem2;
        $("#score").text(totalScore);
        if (totalScore === randNumber) {
            setTimeout(win, 100);
        } else if (totalScore > randNumber) {
            setTimeout(lose, 100);
        }
    });
    $("#gem-3").on('click', function() {
        totalScore += gem3;
        $("#score").text(totalScore);
        if (totalScore === randNumber) {
            setTimeout(win, 100);
        } else if (totalScore > randNumber) {
            setTimeout(lose, 100);
        }
    });
    $("#gem-4").on('click', function() {
        totalScore += gem4;
        $("#score").text(totalScore);
        if (totalScore === randNumber) {
            setTimeout(win, 100);
        } else if (totalScore > randNumber) {
            setTimeout(lose, 100);
        }
    });

});