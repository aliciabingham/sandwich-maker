var SandwichMaker = (function(condimentOptions){
var condiments = {"ketchup": 0.00, "mustard": 0.00, "mayonnaise": 0.00, "avocado spread": 0.00};

condimentOptions.addCondiment = function(newCondiment) {
  condiments.push(newCondiment);
},

condimentOptions.condimentPrices = function(){
  return condiments;
}

return condimentOptions;
})(SandwichMaker || {});