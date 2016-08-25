var SandwichMaker = (function(vegetables){
var vegOptions = ["cucumber", "lettuce", "tomato", "pickle"]

vegetables.getVeggies = function() {
  return vegOptions;
}

return vegetables;
})(SandwichMaker || {});