window.onload = init;

function init() {
  var td = document.getElementsByTagName("td");
  for(var i = 1; i < td.length; i++){
    clearBox(i);
  }
  document.turn = "X"; //The turn of the player
  if(Math.random()< 0.5){
    document.turn = "O";
  }
  document.winner = null; //a variable to determine who's won the game

  setMessage("- " + document.turn + " gets to start -");
}

function setMessage(msg) {
  document.getElementById("message").innerHTML = msg;
}

function nextMove(square) {
  if(document.winner != null){ //if document.winner is not null, this person already won the game
    setMessage(document.winner + " already won the game");
  } else if(square.innerHTML == ""){ //if what's on the inner text is empty, make the next move, if it's not empty throw the message
  square.innerHTML = document.turn;
  switchTurn();
} else {
  setMessage("That square is already used.")
  }
}

function switchTurn() {

  if(checkForWinner(document.turn)){ //if we have a winner it would be true if we don't have a winner it will be false
    setMessage("Congratulations, " + document.turn + "! you win!"); //if we have a winner set that message, if we don't have a winner next turn
    document.winner = document.turn; //whoever won, set us as the winner
  } else if(document.turn == "X"){
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn!");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn!");
  }
}

function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||//all the possible combinations that you can have in a row
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)){
        result = true;
      }
      return result;
}

function checkRow(a, b, c, move) {//it's going to call 3 different squares to see if those 3 squares matches a parrticular move
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move){ //if three x are in a row it is going to have a true result
    result = true;
  }
  return result;
}

function getBox(number) { //to identify the position of every box
  return document.getElementById("s" + number).innerHTML;//it will tell us what it is in the box
}

function clearBox(number) {
  document.getElementById("s" + number).innerHTML = "";
}
