var SandwichMaker = (function(breadTypes){
var breadSelection = ["wheat", " french", " lettuce wrap"]

breadTypes.getBreadTypes = function(){
  return breadSelection;
}

return breadTypes;

})(SandwichMaker || {});