// CREATE

// What is the process of creation?
// I want to create x boxes (x being the number of boxes that the user wrote in the input number), with the y color (y being the color that the user wrote in the input color) whenever the user clicks on the button "Create"
// To do that I need ...

// ... To be able to target the Create button
var btnCreate = document.getElementById("create");
// ...To tell the Create Button what to do when it's clicked
btnCreate.onclick = function () {
  // ...To be able to retrieve the value of the input number
  var inputNumberElement = document.getElementById("input-number");
  var inputNumberValue = Number(inputNumberElement.value);
  console.log(inputNumberValue);

  // ...To be able to retrieve the value of the input color
  var inputColorElement = document.getElementById("input-color");
  var inputColorElement = inputColorElement.value;
  // I want to create as many boxes as the user said: so I use a loop to repeat the same action x times, x being the input number value
  for (let i = 0; i < inputNumberValue; i++) {
    // process of creating a box:
    // 1/ I create the element out of the blue
    var oneBox = document.createElement("div");
    // 2/ I give it a class
    oneBox.className = "box";
    // 3/ I give it the style that the user decided
    oneBox.style.backgroundColor = inputColorElement;
    // 4/ I give it a text
    oneBox.innerText = i;
    // 5/ I make it find its parent again! It was so lost...
    var parent = document.getElementById("container");
    parent.appendChild(oneBox);
  }
  // Once I created all the box, I tell them to listen to any click, and to toggle the active class everytime they are clicked
  var allBoxes = document.getElementsByClassName("box");
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].onclick = function () {
      allBoxes[i].classList.toggle("active");
    };
  }
};

// RESET BUTTON
// What is the purpose of reset?
// It is to erase all the boxes whenever I click on the reset button. The easiest way is to target the parent, and empty it of all its content

// 1/ I need to target the reset button
var btnReset = document.getElementById("reset");
// 2/ I need to target the parent container that I want to empty
var container = document.getElementById("container");
// 3/ I need to tell my button reset to execute a function that will empty the parent container, whenever it is clicked
btnReset.onclick = function () {
  container.innerHTML = "";
};

// REMOVE BUTTON
// What should happen when I click on "remove the selected"?
// First thing first, I click on a button, so I need to target it
var btnRemove = document.getElementById("remove");

// I execute a function whenever I click on it
btnRemove.onclick = removeBoxes;

function removeBoxes() {
  // First thing first, what does "the selected" mean?
  var selectedBoxes = document.querySelectorAll(".active");
  // I use querySelectorAll here, and not getElementsByClassName because I don't want a dynamic list
  // If I loop over a dynamic list + change it at the same time, it's gonna mess up with the indexes in my loop, and I will try to loop over something that does not exist anymore
  // Have a look at this stackoverlow forum: https://stackoverflow.com/questions/23988982/removing-htmlcollection-elements-from-the-dom
  for (let i = 0; i < selectedBoxes.length; i++) {
    // I target the parent, and remove its selected children
    container.removeChild(selectedBoxes[i]);
  }
}
