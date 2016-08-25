var SandwichMaker = (function(condimentOptions){
var condiments = ["ketchup", "mustard", "mayonnaise", "avocado spread"];

condimentOptions.getCondiments = function() {
  return condiments;
}


return condimentOptions;
})(SandwichMaker || {});