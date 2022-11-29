window.onload = init;

// model
var player1 = {
    won: 0,
    lost: 0,
    lastWon: false,
    turn: false,
    line: []
}
var player2 = {
    won: 0,
    lost: 0,
    lastWon: false,
    turn: false,
    line: []
}

// objects
var ply1;
var ply1Win;
var ply1Lose;

var ply2;
var ply2Win;
var ply2Lose;

var message;
var btnRestart;

var allCells = [];
var usedCells = [];


function init() {


    // players details
    ply1 = document.getElementById("player1");
    ply2 = document.getElementById("player2");

    ply1Win = document.getElementById("player1Win");
    ply1Lose = document.getElementById("player1Lose");
    ply2Win = document.getElementById("player2Win");
    ply2Lose = document.getElementById("player2Lose");

    btnRestart = document.getElementById("btn-restart");
    message = document.getElementById("message");

    ply1.style.backgroundColor = "#47b552";
    player1.turn = true;

    allCells = document.getElementsByTagName("td");

    for (var c = 0; c < allCells.length; c++) {

        allCells[c].onclick = handleClick;
    }

    btnRestart.onclick = restartGame;

}

function restartGame() {

    message.innerHTML = "";
    player1.line = [];
    player2.line = [];

    if (player1.lastWon) {
        player1.turn = false;
        player2.turn = true;


    }
    else if (player2.lastWon) {
        player2.turn = false;
        player1.turn = true;


    }


    usedCells = [];

    player1.lastWon = false;
    player2.lastWon = false;

    for (var c = 0; c < allCells.length; c++) {
        allCells[c].style.backgroundImage = "none";
    }

    // the following for loop style will not work for restart
    // for (var c in allCells){
    //     console.log(c);
    // }

}


function handleClick(eventObj) {

    var cell = eventObj.target;
    var cellName = cell.id;

    if (usedCells.indexOf(cellName) > -1) {
        console.log("you already clicked on this cell");
        return;
    }

    if (player1.lastWon == true || player2.lastWon == true) {
        message.innerHTML = "Restart the game!!!";
        return;
    }

    usedCells.push(cellName);
    console.log("You clicked on " + cellName);
    changePlayer(cellName);

}



function changePlayer(cellName) {

    if (player1.turn == true) {
        trackGame(cellName);
        fillCell(cellName);
        if (player1.turn) {

            ply1.style.backgroundColor = "#fff";
            ply2.style.backgroundColor = "#47b552";
            player1.turn = false;
            player2.turn = true;
        }


    }
    else if (player2.turn == true) {
        trackGame(cellName);
        fillCell(cellName);

        if (player2.turn) {

            ply2.style.backgroundColor = "#fff";
            ply1.style.backgroundColor = "#47b552";
            player2.turn = false;
            player1.turn = true;
        }
    }

}

function fillCell(cellName) {
    var cellToFill = document.getElementById(cellName);

    if (player1.turn == true) {

        cellToFill.style.backgroundImage = "url(icons/circle.png)";


    }
    else if (player2.turn == true) {
        cellToFill.style.backgroundImage = "url(icons/close.png)";

    }

}

function trackGame(cellName) {

    if (player1.turn) {
        player1.line.push(cellName);

        if (parseLine(player1.line) == 1) {
            player1.won++;
            player1.lastWon = true;
            player2.lastWon = false;
            ply1Win.innerHTML = "Won: " + player1.won;
            message.innerHTML = "Player 1 Won!!!";

            player2.lost++;
            ply2Lose.innerHTML = "Lost: " + player2.lost;
        }
        else if (parseLine(player1.line) == 0) {
            message.innerHTML = "Tie!!!";
        }


    }
    else if (player2.turn) {
        player2.line.push(cellName);

        if (parseLine(player2.line) == 1) {
            player2.won++;
            player2.lastWon = true;
            player1.lastWon = false;
            ply2Win.innerHTML = "Won: " + player2.won;
            message.innerHTML = "Player 2 Won!!!";

            player1.lost++;
            ply1Lose.innerHTML = "Lost: " + player1.lost;

        }
        else if (parseLine(player2.line) == 0) {
            message.innerHTML = "Tie!!!";
        }

    }




}

// 1 for win
/// 0 for Tie
// -1 for running
function parseLine(line) {

    console.log(line + "\n" + line.length);
    if (line.length > 2) {
        if (line.indexOf('1') > -1 && line.indexOf('2') > -1 && line.indexOf('3') > -1)
            return 1;
        else if (line.indexOf('4') > -1 && line.indexOf('5') > -1 && line.indexOf('6') > -1)
            return 1;
        else if (line.indexOf('7') > -1 && line.indexOf('8') > -1 && line.indexOf('9') > -1)
            return 1;
        else if (line.indexOf('1') > -1 && line.indexOf('4') > -1 && line.indexOf('7') > -1)
            return 1;
        else if (line.indexOf('2') > -1 && line.indexOf('5') > -1 && line.indexOf('8') > -1)
            return 1;
        else if (line.indexOf('3') > -1 && line.indexOf('6') > -1 && line.indexOf('9') > -1)
            return 1;
        else if (line.indexOf('1') > -1 && line.indexOf('5') > -1 && line.indexOf('9') > -1)
            return 1;
        else if (line.indexOf('3') > -1 && line.indexOf('5') > -1 && line.indexOf('7') > -1)
            return 1;
        else if (usedCells.length == 9) return 0;
        else return -1;
    }

    return -1;

}


