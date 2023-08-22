// HTML reference

const btnfeatures = document.getElementById("btnfeatures");
const spanLink = document.getElementById("inputlink");

// Events
btnfeatures.addEventListener("click", () => {
  alert("You clicked the botton!!");
});

spanLink.addEventListener("click", () => {
  // updateText();
  // toggleCursor();
  // setInterval(toggleCursor, 500);
  spanLink.textContent = " ";
});

//funciones

// function updateText() {
//   if (cursorVisible) {
//     spanLink.textContent = " " + "|"; // Agregar el cursor
//   }
// }

// function toggleCursor() {
//   cursorVisible = !cursorVisible;
//   updateText();
// }
