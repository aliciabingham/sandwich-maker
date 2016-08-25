var SandwichMaker = (function(cheeseSelection) {
var cheeseTypes = {"pepperjack": 1.00, "american": 1.00, "cheddar": 1.00}

cheeseSelection.getCheeseTypes = function() {
    return cheeseTypes;
  }

return cheeseSelection;

})(SandwichMaker || {});