
console.log("model.js successfully loaded");

var Tictac = {};
TicTac.Model = function() {
  //private
  var gameBoard = [["","",""],["","",""],["","",""]];

    //gameBoard[x][y];

  //public
  var tictac = {
    resetBoard: function() {
      gameBoard = [["","",""],["","",""],["","",""]];
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
    playMove: function(x,y,player) {
      if(this.isLegalMove(x,y)) {
        gameBoard[x][y] = player;
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
         gameBoard[2][2] != "" &&
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkGameStatus: function() {
      if(checkTicTacToe(0,0,0,1,0,2)) {
        return checkTicTacToe(0,0,0,1,0,2);
      } else if (checkTicTacToe(1,0,1,1,1,2)) {
        return checkTicTacToe(1,0,1,1,1,2);
      } else if (checkTicTacToe(2,0,2,1,2,2)) {
        return checkTicTacToe(2,0,2,1,2,2);
      } else if (checkTicTacToe(0,0,1,0,2,0)) {
        return checkTicTacToe(0,0,1,0,2,0);
      } else if (checkTicTacToe(0,1,1,1,2,1)) {
        return checkTicTacToe(0,1,1,1,2,1);
      } else if (checkTicTacToe(0,2,1,2,2,2)) {
        return checkTicTacToe(0,2,1,2,2,2);
      } else if (checkTicTacToe(0,0,1,1,2,2)) {
        return checkTicTacToe(0,0,1,1,2,2);
      } else if (checkTicTacToe(0,2,1,1,2,0)) {
        return checkTicTacToe(0,2,1,1,2,0);
      } else if(checkBoardFilled()) {
        return "draw";
      }
    },
  };
  return tictac;
}
