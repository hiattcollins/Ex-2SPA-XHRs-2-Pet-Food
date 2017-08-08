console.log("food.js");

// ****** CREATE VARIABLES TO HOLD INFO FROM JSON FILES ****** //
let dogFood;
let catFood;


// ****** FUNCTION TO LOAD DOG FOOD DATA FROM JSON ****** //
function loadDogFoods (callBackToInvoke) {

	let getFoods = new XMLHttpRequest();

	getFoods.addEventListener("load", function (event) {
      	console.log("dog messages loaded successfully");
      	let dogFood = JSON.parse(this.responseText);
        callBackToInvoke(dogFood);
		return dogFood;
      });

    getFoods.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
    });

 	getFoods.open("GET", "dogfood.json");
	getFoods.send();
}


// ****** FUNCTION TO LOAD CAT FOOD DATA FROM JSON ****** //
function loadCatFoods (callBackToInvoke) {

	let getFoods = new XMLHttpRequest();

	getFoods.addEventListener("load", function (event) {
      	console.log("cat messages loaded successfully");
      	let catFood = JSON.parse(this.responseText);
        callBackToInvoke(catFood);
		return catFood;
      });

    getFoods.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
    });

 	getFoods.open("GET", "catfood.json");
	getFoods.send();
}


// ****** CALL LOAD FUNCTIONS AND SUBMIT PRINT FUNCTIONS AS CALLBACK ****** //
loadDogFoods(printDogFoods);
loadCatFoods(printCatFoods);


// ****** FUNCTION TO PRINT DOG FOOD DATA TO DOM ****** //
function printDogFoods(dogFood) {

// ****** LOOPS TO ITERATE OVER DOG FOOD DATA TO PRINT TO DOM IN PROPER ARRANGEMENT ****** //
  for (var i = 0; i < dogFood.dog_brands.length; i++) {
    let stuffToPrint = "";
    let innerStuffToPrint = "";
    let containerLabel = "";

    stuffToPrint += `<div class="foodName"><h1>Brand: ${dogFood.dog_brands[i].name}</h1></div>`
    for (var j = 0; j < dogFood.dog_brands[i].types.length; j++) {
      stuffToPrint += `<div class="foodType"><h3>Food type: ${dogFood.dog_brands[i].types[j].type}</h3></div>`;
      for (var k = 0; k < dogFood.dog_brands[i].types[j].volumes.length; k++) {
        innerStuffToPrint += `<div class="sizeAndPrice"><span>Size: ${dogFood.dog_brands[i].types[j].volumes[k].name} -- </span><span>Price: $${dogFood.dog_brands[i].types[j].volumes[k].price}</span></div>`;
      }
        stuffToPrint += `<div class="typeContainer"><div class="sizeAndPriceContainer">${innerStuffToPrint}</div></div>`;
    }

    // ****** PRINT COMPILED DATA TO DOM ****** //
    document.getElementById("printDogFoods").innerHTML += `<section class="petFoodContainer">${stuffToPrint}</section>`;
  };
}


// ****** FUNCTION TO PRINT CAT FOOD DATA TO DOM ****** //
function printCatFoods(catFood) {

// ****** LOOPS TO ITERATE OVER CAT FOOD DATA TO PRINT TO DOM IN PROPER ARRANGEMENT ****** //
  for (var i = 0; i < catFood.cat_brands.length; i++) {
    let stuffToPrint = "";
    let innerStuffToPrint = "";
    let containerLabel = "";
    let breedsToPrint = "";

    stuffToPrint += `<div class="foodName"><h1>Brand: ${catFood.cat_brands[i].name}</h1></div>`
    for (var q = 0; q < catFood.cat_brands[i].breeds.length; q++) {
      breedsToPrint += `<div class="breed">${catFood.cat_brands[i].breeds[q]}</div>`
    }
    stuffToPrint += `<div class="breedNames"><h3>Best for these Breeds: </h3><div class="breedContainer">${breedsToPrint}</div></div>`;
    for (var j = 0; j < catFood.cat_brands[i].types.length; j++) {
      stuffToPrint += `<div class="foodType"><h3>Food type: ${catFood.cat_brands[i].types[j].type}</h3></div>`;
      for (var k = 0; k < catFood.cat_brands[i].types[j].volumes.length; k++) {
        innerStuffToPrint += `<div class="sizeAndPrice"><span>Size: ${catFood.cat_brands[i].types[j].volumes[k].name} -- </span><span>Price: $${catFood.cat_brands[i].types[j].volumes[k].price}</span></div>`;
      }
        stuffToPrint += `<div class="typeContainer"><div class="sizeAndPriceContainer">${innerStuffToPrint}</div></div>`;
    }

    // ****** PRINT COMPILED DATA TO DOM ****** //
    document.getElementById("printCatFoods").innerHTML += `<section class="petFoodContainer">${stuffToPrint}</section>`;
  };
}
