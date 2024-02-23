const checkbox_base1 = document.getElementById('base1')
checkbox_base1.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("pizza-base1").style.visibility = "visible";
    document.getElementById("pizza-base2").style.visibility = "hidden";

    document.getElementById("thin-crust-button").src = "assets/pizzaIcons/thinCrustSelectedButton.png";
    document.getElementById("thick-crust-button").src = "assets/pizzaIcons/thinCrustUnselectedButton.png";
  } else {

  }
});

const checkbox_base2 = document.getElementById('base2')
checkbox_base2.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("pizza-base2").style.visibility = "visible";
    document.getElementById("pizza-base1").style.visibility = "hidden";

    document.getElementById("thick-crust-button").src = "assets/pizzaIcons/thickCrustSelectedButton.png";
    document.getElementById("thin-crust-button").src = "assets/pizzaIcons/thinCrustUnselectedButton.png";
  } else {

  }
});

const checkbox_cheese = document.getElementById('cheese')
checkbox_cheese.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("cheese-img").style.visibility = "visible";
    document.getElementById("cheese-topping").src = "assets/pizzaIcons/cheeseSelectedButton.png";
  } else {
    document.getElementById("cheese-img").style.visibility = "hidden";
    document.getElementById("cheese-topping").src = "assets/pizzaIcons/cheeseUnselectedButton.png";
  }
});

const checkbox_basil = document.getElementById('basil')
checkbox_basil.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("basil-img").style.visibility = "visible";
    document.getElementById("basil-topping").src = "assets/pizzaIcons/basilSelectedButton.png";
  } else {
    document.getElementById("basil-img").style.visibility = "hidden";
    document.getElementById("basil-topping").src = "assets/pizzaIcons/basilUnselectedButton.png";
  }
});

const checkbox_tomato = document.getElementById('tomato')
checkbox_tomato.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("tomato-img").style.visibility = "visible";
    document.getElementById("tomato-topping").src = "assets/pizzaIcons/tomatoSelectedButton.png";
  } else {
    document.getElementById("tomato-img").style.visibility = "hidden";
    document.getElementById("tomato-topping").src = "assets/pizzaIcons/tomatoUnselectedButton.png";
  }
});

const checkbox_mushroom = document.getElementById('mushroom')
checkbox_mushroom.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("mushroom-img").style.visibility = "visible";
    document.getElementById("mushroom-topping").src = "assets/pizzaIcons/mushroomSelectedButton.png";
  } else {
    document.getElementById("mushroom-img").style.visibility = "hidden";
    document.getElementById("mushroom-topping").src = "assets/pizzaIcons/mushroomUnselectedButton.png";
  }
});

const checkbox_olive = document.getElementById('olive')
checkbox_olive.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("olive-img").style.visibility = "visible";
    document.getElementById("olive-topping").src = "assets/pizzaIcons/oliveSelectedButton.png";
  } else {
    document.getElementById("olive-img").style.visibility = "hidden";
    document.getElementById("olive-topping").src = "assets/pizzaIcons/oliveUnselectedButton.png";
  }
});

const checkbox_pineapple = document.getElementById('pineapple')
checkbox_pineapple.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("pineapple-img").style.visibility = "visible";
    document.getElementById("pineapple-topping").src = "assets/pizzaIcons/pineappleSelectedButton.png";
  } else {
    document.getElementById("pineapple-img").style.visibility = "hidden";
    document.getElementById("pineapple-topping").src = "assets/pizzaIcons/pineappleUnselectedButton.png";
  }
});



function reserve(){
  alert('Your table has been booked!');
}