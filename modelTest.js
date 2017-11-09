console.log("modelTest.js successfully loaded");

Tictac.ModelTest = function() {
  var tictac = new Tictac.Model();
  var test = 0;
  var name;
  var result = function(testResult) {
    if(testResult == "fail" || testResult == "f") {
      console.log("*** test ", test, ": ", name, " FAILED ***");
    } else if(testResult == "pass" || testResult == "p") {
      console.log("test ", test, ": ", name, " passed");
    } else {
      console.log("************************");
      console.log("TYPO IN TESTING FUNCTION");
      console.log("************************");
    };
  };

  test++;
  name = "set/getNumPlayers";
  tictac.setNumPlayers(2);
  if(tictac.getNumPlayers() == 2) {
    result("p");
  } else {
    result("f");
  };

  test++;
  name = "toggle/getActivePlayer";
  tictac.resetBoard();
  tictac.toggleActivePlayer();
  if (tictac.getActivePlayer() == "o") {
    result("p");
  } else {
    result("f");
  };
  test++;
  name = "set/getSquare";
  tictac.resetBoard();
  tictac.setSquare(0,0,"x");
  if(tictac.getSquare(0,0) == "x") {
    result("p");
  } else {
    result("f");
  };

  test++;
  name = "isLegalMove";
  tictac.resetBoard();
  tictac.setSquare(0,0,"x");
  if(!tictac.isLegalMove(0,0)) {
    result("p");
  } else {
    result("f");
  };

  test++;
  name = "_checkVertTicTacToe";
  tictac.resetBoard();
  tictac.setSquare(0,0,"x");
  tictac.setSquare(0,1,"x");
  tictac.setSquare(0,2,"x");
  if(tictac._checkVertTicTacToe()) {
    result("p");
  } else {
    result("f");
  };

  test++;
  name = "_checkHorizTicTacToe";
  tictac.resetBoard();
  tictac.setSquare(0,0,"x");
  tictac.setSquare(1,0,"x");
  tictac.setSquare(2,0,"x");
  if(tictac._checkHorizTicTacToe()) {
    result("p");
  } else {
    result("f");
  };

  test++
  name = "_checkDiagTicTacToe";
  tictac.resetBoard();
  tictac.setSquare(0,0,"x");
  tictac.setSquare(1,1,"x");
  tictac.setSquare(2,2,"x");
  if(tictac._checkDiagTicTacToe()) {
    result("p");
  } else {
    result("f");
  };

  test++;
  name = "_checkBoardFilled";
  tictac.resetBoard();
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      tictac.setSquare(i,j);
    };
  };
  if(tictac._checkBoardFilled()) {
    result("p");
  } else {
    result("f");
  };
};
