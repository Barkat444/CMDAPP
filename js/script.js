const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);


//variable declerations

// const selectElement = document.getElementById("TypeOfConcrete").value;

// console.log(selectElement);


// function selectedValue(){
//   var selectElement = document.getElementById("TypeOfConcrete").value;
//   alert(selectElement);
// }

// function selectedValue(){
//   var selectElement = document.getElementById("TypeOfConcrete").value;
//   if(selectElement!="SELECT"){
//     alert(selectElement);
//   }
// }


// Section1

// var typeOfConcrete = () => {
//   var selectedElement = document.getElementById("TypeOfConcrete").value;
//   alert(selectedElement);
// }

