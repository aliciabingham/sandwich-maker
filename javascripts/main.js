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


finalSandwichPrice += getPrice(SandwichMaker.breadPrices(), topping);
document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
})

meatoptions.addEventListener('change', function(e){
  topping = e.target.value;

finalSandwichPrice += getPrice(SandwichMaker.meatPrices(), topping);
document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
})

cheeseoptions.addEventListener('change', function(e){
  topping = e.target.value;

  finalSandwichPrice += getPrice(SandwichMaker.cheesePrices(), topping);
  document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
 })

condiments.addEventListener('change', function(e){
  topping = e.target.value;

  finalSandwichPrice += getPrice(SandwichMaker.condimentPrices(), topping);
  document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
 })


veggiesoptions.addEventListener('change', function(e){
  topping = e.target.value;

  finalSandwichPrice += getPrice(SandwichMaker.veggiePrices(), topping);
  document.getElementById("output").value = "$" + finalSandwichPrice.toFixed(2);
 })














