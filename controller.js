
console.log("controller.js loaded");

Tictac.Controller = function() {
  return {
    ticTacBox: document.getElementsByClassName("ticTacToeBox")[0],
    model: Tictac.Model(),
    initialize: function() {
      var controller = this;
      this.ticTacBox.getElementsByClassName("onePlayerButton")[0].onclick =
        function() {
          // start one player game
          controller.updateHTML();
      };
      this.ticTacBox.getElementsByClassName("twoPlayerButton")[0].onclick =
        function() {
          controller.model.startTwoPlayerGame();
          controller.updateHTML();
      };
      this.ticTacBox.getElementsByClassName("resetButton")[0].onclick =
        function() {
          controller.model.resetBoard();
          controller.updateHTML();
      };
    },
    updateHTML: function() {
      var controller = this;
      var buttons = controller.ticTacBox.getElementsByClassName("tictactoeButton");
      for (i=0;i<9;i++) {
        var xcoord = buttons[i].getAttribute("data-xaxis");
        var ycoord = buttons[i].getAttribute("data-yaxis");
        buttons[i].getElementsByTagName('p')[0].innerHTML =
          controller.model.getSquare(xcoord,ycoord);
      }
    },
  };
};

var controller = Tictac.Controller();
controller.initialize();
