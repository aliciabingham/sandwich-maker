var SandwichMaker = (function(condimentOptions){
var condiments = {"ketchup": 0.00, "mustard": 0.00, "mayonnaise": 0.00, "avocadospread": 1.00};

condimentOptions.addCondiment = function(newCondiment) {
  condiments.push(newCondiment);
},

condimentOptions.condimentPrices = function(){
  return condiments;
}

return condimentOptions;
})(SandwichMaker || {});