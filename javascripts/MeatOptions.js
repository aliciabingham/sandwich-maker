var SandwichMaker = (function(meatTypes) {
var meatOptions = {"turkey": 0.90, "bacon": 1.25, "sausage": 0.90, "salami": 1.25};
var meatPrices = 0;

  meatTypes.getMeatOptions = function() {
    return meatOptions;
  },

  meatTypes.addMeatOptions = function(newOptions) {
    meatOptions = meatOptions.push(newOptions);
  },

  meatTypes.addMeatPrices = function(newPrices){
    meatPrices = newPrices;
  },

  meatTypes.getMeatPrices = function(){
    return meatPrices;
  }

return meatTypes;

})(SandwichMaker || {});

