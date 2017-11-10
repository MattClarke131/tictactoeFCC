
console.log("controller.js loaded");

Tictac.Controller = function(node) {
  return {
    ticTacBox: node,
    model: Tictac.Model(),
    initialize: function() {
      var controller = this;
      this.ticTacBox.getElementsByClassName("onePlayerButton")[0].onclick =
        function() {
          controller.model.resetBoard();
          controller.model.startOnePlayerGame();
          controller.init1PGame();
          controller.updateHTML();
      };
      this.ticTacBox.getElementsByClassName("twoPlayerButton")[0].onclick =
        function() {
          controller.model.resetBoard();
          controller.model.startTwoPlayerGame();
          controller.init2PGame();
          controller.updateHTML();
      };
      this.ticTacBox.getElementsByClassName("resetButton")[0].onclick =
        function() {
          controller.model.resetBoard();
          controller.updateHTML();
      };
    },
    init2PGame: function() {
      var controller = this;
      controller._showGameBoard();
      var buttons =
        controller.ticTacBox.getElementsByClassName("tictactoeButton");
      for(var i=0;i<9;i++) {
        buttons[i].onclick = function() {
          var xcoord = this.getAttribute("data-xaxis");
          var ycoord = this.getAttribute("data-yaxis");
          controller.model.humanMove(xcoord,ycoord);
          controller.updateHTML();
        }
      }
    },
    init1PGame: function() {
      var controller = this;
      controller._showGameBoard();
      var buttons =
        controller.ticTacBox.getElementsByClassName("tictactoeButton");
      for(var i=0;i<9;i++) {
        buttons[i].onclick = function() {
          var xcoord = this.getAttribute("data-xaxis");
          var ycoord = this.getAttribute("data-yaxis");
          controller.model.humanMove(xcoord,ycoord);
          controller.updateHTML();
        }
      }
    },
    _showGameBoard: function() {
      var controller = this;
      gameBoard = controller.ticTacBox.getElementsByClassName("ticTacToeGame")[0];
      gameBoard.removeAttribute("hidden");
    },
    updateHTML: function() {
      var controller = this;
      var buttons =
        controller.ticTacBox.getElementsByClassName("tictactoeButton");
      for (var i=0;i<9;i++) {
        var xcoord = buttons[i].getAttribute("data-xaxis");
        var ycoord = buttons[i].getAttribute("data-yaxis");
        buttons[i].getElementsByTagName('p')[0].innerHTML =
          controller.model.getSquare(xcoord,ycoord);
      }
    },
  };
};

var ticTacNodes = document.getElementsByClassName("ticTacToeBox");
for (var i = 0; i < ticTacNodes.length; ++i) {
  var node = ticTacNodes[i];
  var controller = Tictac.Controller(node);
  controller.initialize();
}
