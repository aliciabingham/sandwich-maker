console.log(SandwichMaker.getMeatOptions());

console.log(SandwichMaker.getBreadTypes());

console.log(SandwichMaker.getCheeseTypes());

console.log(SandwichMaker.getCondiments());

console.log(SandwichMaker.getVeggies());

var bread = document.getElementById("bread");
var meat = document.getElementById("meat");
var cheese = document.getElementById("cheese");


bread.innerHTML = SandwichMaker.getBreadTypes();
meat.innerHTML = SandwichMaker.getMeatOptions();
cheese.innerHTML = SandwichMaker.getCheeseTypes();
