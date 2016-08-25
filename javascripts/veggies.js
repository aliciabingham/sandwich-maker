var SandwichMaker = (function(vegetables){
var vegOptions = {"cucumber":0.50, "lettuce":0.50, "tomato":0.50, "pickle":0.50}

vegetables.getVeggies = function() {
  return vegOptions;
}

return vegetables;
})(SandwichMaker || {});