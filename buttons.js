// HTML reference
const btnFea = document.getElementById("btnfeatures");
const spanLink = document.getElementById("inputlink");

const headerr = document.getElementById("headerid");
const navi = document.querySelector("header img");
const navigation = document.getElementById("nav");
const contenedor= document.getElementsByClassName('contenedormain');
let menu = document.createElement("div");
let features1 = document.createElement("span");
let pricing1 = document.createElement("span");
let resources1 = document.createElement("span");
let login1 = document.createElement("span");
let signUp1 = document.createElement("span");
let line = document.createElement("span");

//Events


spanLink.addEventListener("click", () => {
  spanLink.textContent = " ";
});

navigation.addEventListener("click", () => {
  menu.className = "menuid";
  document.body.appendChild(menu);
  document.body.insertBefore(menu, document.body.childNodes[2]);
  features1.innerText = "Features";
  pricing1.innerText = "Princing";
  resources1.innerText = "Resources";
  resources1.className = 'resnav';
  line.innerText = "";
  login1.innerText = "Login";
  signUp1.innerText = "Sign Up";
  signUp1.className = "signup1";
  line.className = "linevar";
  menu.appendChild(features1);
  menu.appendChild(pricing1);
  menu.appendChild(resources1);
  menu.appendChild(line);
  menu.appendChild(login1);
  menu.appendChild(signUp1);
});

navigation.addEventListener("mouseleave", () => {
  document.body.removeChild(menu);
});
