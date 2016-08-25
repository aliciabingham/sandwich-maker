var SandwichMaker = (function(breadTypes){
var breadSelection = {"wheat": 1.25, "french":1.25, "lettuce wrap": 1.00}

breadTypes.getBreadTypes = function(){
  return breadSelection;
}

return breadTypes;

})(SandwichMaker || {});