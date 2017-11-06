
console.log("model.js successfully loaded");

var Tictac = {};
Tictac.Model = function() {
  //private
  var gameBoard = [["","",""],["","",""],["","",""]];
    //gameBoard[x-coord][y-coord];
  var activePlayer = "x";

  //public
  var tictac = {
    resetBoard: function() {
      gameBoard = [["","",""],["","",""],["","",""]];
      activePlayer = "x";
    },
    getBoard: function() {
      return gameBoard;
    },
    getSquare: function(x,y) {
      return gameBoard[x][y];
    },
    isLegalMove: function(x,y) {
      if(gameBoard[x][y] == "") {
        return true;
      } else {
        return false;
      }
    },
    playMove: function(x,y) {
      if(this.isLegalMove(x,y)) {
        gameBoard[x][y] = activePlayer;
      }
    },
    checkTicTacToe: function(ax, ay, bx, by, cx, cy) {
      if(gameBoard[ax][ay] != "" &&
         gameBoard[ax][ay] == gameBoard[bx][by] &&
         gameBoard[ax][ay] == gameBoard[cx][cy]) {
        return gameBoard[ax][ay];
      } else {
        return false;
      }
    },
    checkBoardFilled: function() {
      if(gameBoard[0][0] != "" &&
         gameBoard[0][1] != "" &&
         gameBoard[0][2] != "" &&
         gameBoard[1][0] != "" &&
         gameBoard[1][1] != "" &&
         gameBoard[1][2] != "" &&
         gameBoard[2][0] != "" &&
         gameBoard[2][1] != "" &&
         gameBoard[2][2] != "")
      {
        return true;
      } else {
        return false;
      }
    },
    checkGameStatus: function() {
      if(this.checkTicTacToe(0,0,0,1,0,2)) {
        return this.checkTicTacToe(0,0,0,1,0,2);
      } else if (this.checkTicTacToe(1,0,1,1,1,2)) {
        return this.checkTicTacToe(1,0,1,1,1,2);
      } else if (this.checkTicTacToe(2,0,2,1,2,2)) {
        return this.checkTicTacToe(2,0,2,1,2,2);
      } else if (this.checkTicTacToe(0,0,1,0,2,0)) {
        return this.checkTicTacToe(0,0,1,0,2,0);
      } else if (this.checkTicTacToe(0,1,1,1,2,1)) {
        return this.checkTicTacToe(0,1,1,1,2,1);
      } else if (this.checkTicTacToe(0,2,1,2,2,2)) {
        return this.checkTicTacToe(0,2,1,2,2,2);
      } else if (this.checkTicTacToe(0,0,1,1,2,2)) {
        return this.checkTicTacToe(0,0,1,1,2,2);
      } else if (this.checkTicTacToe(0,2,1,1,2,0)) {
        return this.checkTicTacToe(0,2,1,1,2,0);
      } else if(this.checkBoardFilled()) {
        return "draw";
      } else {
        return "incomplete"
      }
    },
    getActivePlayer: function() {
      return activePlayer;
    },
    changeActivePlayer: function() {
      if (activePlayer == "x") {
        activePlayer = "o";
      } else {
        activePlayer = "x";
      }
    },
    debugPrintBoard: function() {
      console.log(gameBoard[2]);
      console.log(gameBoard[1]);
      console.log(gameBoard[0]);
    }
  };
  return tictac;
}
