// HTML reference

const btnfeatures = document.getElementById("btnfeatures");
const spanLink = document.getElementById("inputlink");




// Events
btnfeatures.addEventListener("click", () => {
  alert("You clicked the botton!!");
});


spanLink.addEventListener("click", () => {
  spanLink.textContent= "";
});
