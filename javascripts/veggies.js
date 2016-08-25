var SandwichMaker = (function(vegetables){
var vegOptions = {"cucumber":0.50, "lettuce":0.50, "tomato":0.50, "pickle":0.50}

vegetables.addVeggie = function(newVegetable) {
  vegOptions.push(newVegetable);
},

vegetables.veggiePrices = function(){
  return vegOptions;
}


return vegetables;
})(SandwichMaker || {});