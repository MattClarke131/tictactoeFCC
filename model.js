
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

    //Two player game
    startTwoPlayerGame: function() {
      this.resetBoard();
      this.setNumPlayers(2);
    },
    twoPlayerMove: function(x,y) {
      if(this.isLegalMove(x,y)) {
        this.setSquare(x,y,activePlayer);
        switch(this.checkGameStatus()) {
          case "incomplete":
            this.toggleActivePlayer();
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
      };
    },

    //One player game
    startOnePlayerGame: function() {
      this.resetBoard();
      this.setNumPlayers(1);
    },
    onePlayerMove: function(x,y) {
      if(this.isLegalMove(x,y)) {
        this.setSquare(x,y,activePlayer);
        switch(this.checkGameStatus()) {
          case "incomplete":
            this.toggleActivePlayer();
            this.playRandomMove();
            switch(this.checkGameStatus()) {
              case "incomplete":
                this.toggleActivePlayer();
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
      };
    },
    playRandomMove: function() {
      var availableMoves = [];
      for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
          if(this.isLegalMove(i,j)) {
            availableMoves.push([i,j]);
          };
        };
      };
      var move =availableMoves[Math.floor(Math.random()*availableMoves.length)];
      this.setSquare(move[0],move[1],activePlayer);
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
