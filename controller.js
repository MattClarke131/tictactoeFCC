
console.log("controller.js loaded");

Tictac.Controller = function() {
  return {
    model: Tictac.Model(),
    initialize: function() {
    },
  };
};

var controller = Tictac.Controller();
