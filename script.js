const checkbox_base1 = document.getElementById('base1')
checkbox_base1.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("pizzaBase1").style.visibility = "visible";
    document.getElementById("pizzaBase2").style.visibility = "hidden";

    document.getElementById("thinCrustButton").src = "pizza/thinCrustSelectedButton.png";
    document.getElementById("thickCrustButton").src = "pizza/thickCrustUnselectedButton.png";
  } else {

  }
});

const checkbox_base2 = document.getElementById('base2')
checkbox_base2.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("pizzaBase2").style.visibility = "visible";
    document.getElementById("pizzaBase1").style.visibility = "hidden";

    document.getElementById("thickCrustButton").src = "pizza/thickCrustSelectedButton.png";
    document.getElementById("thinCrustButton").src = "pizza/thinCrustUnselectedButton.png";
  } else {

  }
});

const checkbox_cheese = document.getElementById('cheese')
checkbox_cheese.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("cheeseImg").style.visibility = "visible";
    document.getElementById("cheeseTopping").src = "pizza/cheeseSelectedButton.png";
  } else {
    document.getElementById("cheeseImg").style.visibility = "hidden";
    document.getElementById("cheeseTopping").src = "pizza/cheeseUnselectedButton.png";
  }
});

const checkbox_basil = document.getElementById('basil')
checkbox_basil.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("basilImg").style.visibility = "visible";
    document.getElementById("basilTopping").src = "pizza/basilSelectedButton.png";
  } else {
    document.getElementById("basilImg").style.visibility = "hidden";
    document.getElementById("basilTopping").src = "pizza/basilUnselectedButton.png";
  }
});

const checkbox_tomato = document.getElementById('tomato')
checkbox_tomato.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("tomatoImg").style.visibility = "visible";
    document.getElementById("tomatoTopping").src = "pizza/tomatoSelectedButton.png";
  } else {
    document.getElementById("tomatoImg").style.visibility = "hidden";
    document.getElementById("tomatoTopping").src = "pizza/tomatoUnselectedButton.png";
  }
});

const checkbox_mushroom = document.getElementById('mushroom')
checkbox_mushroom.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("mushroomImg").style.visibility = "visible";
    document.getElementById("mushroomTopping").src = "pizza/mushroomSelectedButton.png";
  } else {
    document.getElementById("mushroomImg").style.visibility = "hidden";
    document.getElementById("mushroomTopping").src = "pizza/mushroomUnselectedButton.png";
  }
});

const checkbox_olive = document.getElementById('olive')
checkbox_olive.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("oliveImg").style.visibility = "visible";
    document.getElementById("oliveTopping").src = "pizza/oliveSelectedButton.png";
  } else {
    document.getElementById("oliveImg").style.visibility = "hidden";
    document.getElementById("oliveTopping").src = "pizza/oliveUnselectedButton.png";
  }
});

const checkbox_pineapple = document.getElementById('pineapple')
checkbox_pineapple.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("pineappleImg").style.visibility = "visible";
    document.getElementById("pineappleTopping").src = "pizza/pineappleSelectedButton.png";
  } else {
    document.getElementById("pineappleImg").style.visibility = "hidden";
    document.getElementById("pineappleTopping").src = "pizza/pineappleUnselectedButton.png";
  }
});



function reserve(){
  alert('Your table has been booked!');
}