// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    // console.log($mushroom)
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  var crust = document.querySelector(".sauce")
  if (state.whiteSauce) {
    crust.classList.add("sauce-white");
  }
  else {
    crust.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  }
  else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
  }
  else {
    document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  }

  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  }
  else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }

  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  }
  else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }

  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  }
  else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  }
  else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }

}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var finalPrice = 0, valpep;
  //let elem = document.querySelector("aside.panel.price ul li"); 
  //elem.innerHtml = ["$1", "$1", "$1", "$3", "$5"]; 
  if (state.pepperonni === true) {
    valpep = 1;
  }
  else if (state.pepperonni === false) {
    valpep = 0;
  }
  if (state.mushrooms === true) {
    valmush = 1;
  }
  else if (state.mushrooms === false) {
    valmush = 0;
  }
  if (state.greenPeppers === true) {
    valgreen = 1;
  }
  else if (state.greenPeppers === false) {
    valgreen = 0;
  }
  if (state.whiteSauce === true) {
    valwhite = 3;
  }
  else if (state.whiteSauce === false) {
    valwhite = 0;
  }
  if (state.glutenFreeCrust === true) {
    valcrust = 5;
  }
  else if (state.glutenFreeCrust === false) {
    valcrust = 0;
  }

  console.log("valpep", valpep);

  return document.querySelector("aside.panel.price>strong").innerHTML = basePrice + valpep + valmush + valgreen + valwhite + valcrust;

}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}
renderPrice();
renderEverything();