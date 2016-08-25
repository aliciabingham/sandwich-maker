var SandwichMaker = (function(meatTypes) {
var meatOptions = {"turkey": 0.90, "bacon": 1.25, "ham": 0.90, "salami": 1.25};

meatTypes.addMeat = function(newMeat) {
  meatOptions.push(newMeat);
},

meatTypes.meatPrices = function(){
  return meatOptions;
}

return meatTypes;

})(SandwichMaker || {});

