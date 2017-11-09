
console.log("model.js successfully loaded");

var Tictac = {};
Tictac.Model = function() {
  //private
  var gameBoard;
    //gameBoard[x-coord][y-coord];
  var activePlayer;
  var numPlayers = null;

  //public
  var tictac = {
    //Get methods
    getSquare: function(x,y) {
      return gameBoard[x][y];
    },
    getActivePlayer: function() {
      return activePlayer;
    },
    getNumPlayers: function() {
      return numPlayers;
    },

    //Change state methods
    setSquare: function(x,y,player) {
      gameBoard[x][y] = player;
    },
    toggleActivePlayer: function() {
      if (activePlayer == "x") {
        activePlayer = "o";
      } else {
        activePlayer = "x";
      }
    },
    setNumPlayers: function(number) {
      numPlayers = number;
    },
    resetBoard: function() {
      gameBoard = [["","",""],["","",""],["","",""]];
      activePlayer = "x";
    },

    //Check methods
    isLegalMove: function(x,y) {
      if(gameBoard[x][y] == "") {
        return true;
      } else {
        return false;
      }
    },
    checkGameStatus: function() {
      return this._checkAllTicTacToe()
      || (this._checkBoardFilled() ? "draw" : "incomplete");
    },
    _checkAllTicTacToe: function() {
      return this._checkVertTicTacToe()
          || this._checkHorizTicTacToe()
          || this._checkDiagTicTacToe();
    },
    _checkVertTicTacToe: function() {
      for(var i = 0; i < 3; i++) {
        if(gameBoard[i][0] != "" &&
           gameBoard[i][0] == gameBoard[i][1] &&
           gameBoard[i][0] == gameBoard[i][2]) {
             return gameBoard[i][0];
         };
      };
      //else
      return false;
    },
    _checkHorizTicTacToe: function() {
      for(var i = 0; i < 3; i++) {
        if(gameBoard[0][i] != "" &&
           gameBoard[0][i] == gameBoard[1][i] &&
           gameBoard[0][i] == gameBoard[2][i]) {
             return gameBoard[0][i];
         };
      };
      //else
      return false;
    },
    _checkDiagTicTacToe: function() {
      //bottom left to top right diagonal
      if(gameBoard[0][0] != "" &&
         gameBoard[0][0] == gameBoard[1][1] &&
         gameBoard[0][0] == gameBoard[2][2]) {
           return gameBoard[0][0];
       };
       //top left to bottom right diagonal
      if(gameBoard[0][2] != "" &&
         gameBoard[0][2] == gameBoard[1][1] &&
         gameBoard[0][2] == gameBoard[2][0]) {
           return gameBoard[0][2];
       };
       //else
       return false;
    },
    _checkBoardFilled: function() {
      for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
          if(gameBoard[i][j] == "") {
            return false;
          }
        }
      }
      //else
      return true;
    },
    startOnePlayerGame: function() {
      this.resetBoard();
      this.setNumPlayers(1);
    },
    startTwoPlayerGame: function() {
      this.resetBoard();
      this.setNumPlayers(2);
    },
    humanMove: function(x,y) {
      if(this.isLegalMove(x,y)) {
        this.setSquare(x,y,activePlayer);
      };
      if(this.checkGameStatus() != "incomplete") {
        this._finishGame();
      } else if(numPlayers == 1) {
        this.toggleActivePlayer();
        randMove = this._selectRandomMove();
        this.setSquare(randMove[0], randMove[1], activePlayer);
        if(this.checkGameStatus() != "incomplete") {
          this._finishGame();
        } else {
          this.toggleActivePlayer();
        };
      } else {
        this.toggleActivePlayer();
      };
    },
    _finishGame: function() {
      switch(this.checkGameStatus()) {
        case "incomplete":
          break;
        case "draw":
          alert("GAME IS A DRAW");
          break;
        case "x":
          alert("X WINS!");
          break;
        case "o":
          alert("O WINS!");
          break;
      };
    },
    _selectRandomMove: function() {
      var legalMoves = [];
      for(var i=0;i<3;i++) {
        for(var j=0;j<3;j++) {
          if(this.isLegalMove(i,j)) {
            legalMoves.push([i,j]);
          };
        };
      };
      var move = legalMoves[Math.floor(Math.random()*legalMoves.length)];
      return move;
    },

    //Debug
    debugPrintBoard: function() {
      console.log([gameBoard[0][2],gameBoard[1][2],gameBoard[2][2]]);
      console.log([gameBoard[0][1],gameBoard[1][1],gameBoard[2][1]]);
      console.log([gameBoard[0][0],gameBoard[1][0],gameBoard[2][0]]);
    },
  };
  return tictac;
}
