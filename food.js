console.log("food.js");

let dogFood;
let catFood;

function loadDogFoods (callBackToInvoke) {

	let getFoods = new XMLHttpRequest();

	getFoods.addEventListener("load", function (event) {
      	console.log("dog messages loaded successfully");

      	let dogFood = JSON.parse(this.responseText);

        callBackToInvoke(dogFood);

      	console.log("dogFood", dogFood);

		return dogFood;
      });

    getFoods.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
    });

 	getFoods.open("GET", "dogfood.json");
	getFoods.send();
}

function loadCatFoods (callBackToInvoke) {

	let getFoods = new XMLHttpRequest();

	getFoods.addEventListener("load", function (event) {
      	console.log("cat messages loaded successfully");

      	let catFood = JSON.parse(this.responseText);

        callBackToInvoke(catFood);

      	console.log("catFood", catFood);

		return catFood;
      });

    getFoods.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
    });

 	getFoods.open("GET", "catfood.json");
	getFoods.send();
}


loadDogFoods(printDogFoods);

loadCatFoods(printCatFoods);

function printDogFoods(dogFood) {

  console.log("dogFood", dogFood);

  console.log("dogFood.dog_brands]", dogFood.dog_brands);

  // var whereToPrint = document.getElementById("printDogFoods").innerHTML;



  // console.log("dogFood.dog_brands.child", dogFood.dog_brands.child);
  // dogFood.dog_brands.forEach(function (element){
  //   console.log("element", element);
  //   console.log("element.types", element.types);
  //   console.log("element.child", element.child);
  //   console.log("element.types.child", element.types.child);
  //   element.types.forEach(function (element_1){
  //     console.log("element_1", element_1);
  //     console.log("element_1.type", element_1.type);
  //     element_1.volumes.forEach(function (element_2) {
  //       console.log("element_2", element_2);
  //       console.log("element_2.name", element_2.name);
  //       console.log("element_2.price", element_2.price);
  //     });
  //   });
  // });



  for (var i = 0; i < dogFood.dog_brands.length; i++) {
    let stuffToPrint = "";
    let innerStuffToPrint = "";
    let containerLabel = "";

    stuffToPrint += `<div class="foodName"><h1>Brand: ${dogFood.dog_brands[i].name}</h1></div>`
    console.log("dogFood.dog_brands[i].name", dogFood.dog_brands[i].name);
    console.log("dogFood.dog_brands[i].types", dogFood.dog_brands[i].types);
    for (var j = 0; j < dogFood.dog_brands[i].types.length; j++) {
      stuffToPrint += `<div class="foodType"><h3>Food type: ${dogFood.dog_brands[i].types[j].type}</h3></div>`;
      console.log("dogFood.dog_brands[i].types[j]", dogFood.dog_brands[i].types[j]);
      for (var k = 0; k < dogFood.dog_brands[i].types[j].volumes.length; k++) {
        console.log("dogFood.dog_brands[i].types[j].volumes[k]", dogFood.dog_brands[i].types[j].volumes[k]);
        innerStuffToPrint += `<div class="sizeAndPrice"><span>Size: ${dogFood.dog_brands[i].types[j].volumes[k].name} -- </span><span>Price: $${dogFood.dog_brands[i].types[j].volumes[k].price}</span></div>`;
      }
        stuffToPrint += `<div class="typeContainer"><div class="sizeAndPriceContainer">${innerStuffToPrint}</div></div>`;
    }
    document.getElementById("printDogFoods").innerHTML += `<section class="petFoodContainer">${stuffToPrint}</section>`;
  };

  // dogFood.dog_brands.forEach(function (element){
  //   stuffToPrint += '<section class="petFoodContainer"><p>${element.name}</p>';
  //   element.types.forEach(function (element_1){
  //     console.log("element_1", element_1);
  //     console.log("element_1.type", element_1.type);
  //     stuffToPrint += '<p>${element_1.type}</p>';
  //     // document.getElementById("printDogFoods").innerHTML += `<div>`
  //     element_1.volumes.forEach(function (element_2) {
  //       console.log("element_2", element_2);
  //       console.log("element_2.name", element_2.name);
  //       console.log("element_2.price", element_2.price);
  //       stuffToPrint +=  '<p>Size: ${element_2.name}</p><p>Price: ${element_2.price}</p>';
  //     });
  //     // document.getElementById("printDogFoods").innerHTML += `</div>`
  //   });
  //   // document.getElementById("printDogFoods").innerHTML += `</section>`;    
  // });
  // stuffToPrint += '</section>';    

  // document.getElementById("printDogFoods").innerHTML += `${stuffToPrint}`;

  // document.getElementById("printDogFoods").innerHTML += `End of Print`;

  // console.log("stuffToPrint", stuffToPrint);

  // console.log("document.getElementsByTagName('SECTION')", document.getElementsByTagName('SECTION'));

  // let foodSections = document.getElementsByTagName('SECTION');

  // console.log("foodSections[0]", foodSections[0]);

  // foodSections[0].classList.add("petFoodContainerStyle");

  // foodSections.forEach(function (element) {
  //   element.classList.add("petFoodContainer_style");
  // });

  
}

function printCatFoods(catFood) {

  console.log("catFood in printCatFoods", catFood);

  console.log("catFood.cat_brands", catFood.cat_brands);

  for (var i = 0; i < catFood.cat_brands.length; i++) {
    let stuffToPrint = "";
    let innerStuffToPrint = "";
    let containerLabel = "";
    let breedsToPrint = "";

    stuffToPrint += `<div class="foodName"><h1>Brand: ${catFood.cat_brands[i].name}</h1></div>`
    console.log("catFood.cat_brands[i].name", catFood.cat_brands[i].name);
    console.log("catFood.cat_brands[i].types", catFood.cat_brands[i].types);
    for (var q = 0; q < catFood.cat_brands[i].breeds.length; q++) {
      breedsToPrint += `<div class="breed">${catFood.cat_brands[i].breeds[q]}</div>`
      console.log("catFood.cat_brands[i].breeds[q]", catFood.cat_brands[i].breeds[q]);
    }
    stuffToPrint += `<div class="breedNames"><h3>Best for these Breeds: </h3><div class="breedContainer">${breedsToPrint}</div></div>`;
    for (var j = 0; j < catFood.cat_brands[i].types.length; j++) {
      stuffToPrint += `<div class="foodType"><h3>Food type: ${catFood.cat_brands[i].types[j].type}</h3></div>`;
      console.log("catFood.cat_brands[i].types[j]", catFood.cat_brands[i].types[j]);
      for (var k = 0; k < catFood.cat_brands[i].types[j].volumes.length; k++) {
        console.log("catFood.cat_brands[i].types[j].volumes[k]", catFood.cat_brands[i].types[j].volumes[k]);
        innerStuffToPrint += `<div class="sizeAndPrice"><span>Size: ${catFood.cat_brands[i].types[j].volumes[k].name} -- </span><span>Price: $${catFood.cat_brands[i].types[j].volumes[k].price}</span></div>`;
      }
        stuffToPrint += `<div class="typeContainer"><div class="sizeAndPriceContainer">${innerStuffToPrint}</div></div>`;
    }
    document.getElementById("printCatFoods").innerHTML += `<section class="petFoodContainer">${stuffToPrint}</section>`;
  };

}

// Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.

// Once you have all of that information listed, you need to create a second JSON file to represent the new product line for Acme, Inc. They now want to sell cat food. Your product owner gives you a spreadsheet with all the new data in it. It is your job to get this data represented correctly in JSON format and then update your page to now show cat food, along with dog food.