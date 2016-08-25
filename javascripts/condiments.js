var SandwichMaker = (function(condimentOptions){
var condiments = {"ketchup": 0.00, "mustard": 0.00, "mayonnaise": 0.00, "avocado spread": 0.00};

condimentOptions.getCondiments = function() {
  return condiments;
}


return condimentOptions;
})(SandwichMaker || {});