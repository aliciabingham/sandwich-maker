console.log(SandwichMaker.breadPrices());

console.log(SandwichMaker.meatPrices());

console.log(SandwichMaker.cheesePrices());

console.log(SandwichMaker.condimentPrices());

console.log(SandwichMaker.veggiePrices());

var finalSandwichPrice = 0;
var topping;

var breadoptions = document.getElementById('breadoptions');
var meatoptions = document.getElementById('meatoptions');
var cheeseoptions = document.getElementById('cheeseoptions');
var condiments = document.getElementById('condiments');
var veggiesoptions = document.getElementById('veggiesoptions');

function getPrice(objectArray, topping) {
    for(var i in objectArray) {
        if(i === topping) {
            return objectArray[i];
        }
    }
}

breadoptions.addEventListener('change', function(e){
  topping = e.target.value;

  var finalSandwichPrice1 = parseInt(finalSandwichPrice);

finalSandwichPrice1 += getPrice(SandwichMaker.breadPrices(), topping);
document.getElementById("output").value = "$" + finalSandwichPrice1.toFixed(2);
})