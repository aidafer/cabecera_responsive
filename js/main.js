// Mostrar menú

var iconElement = document.getElementById("icon");
var closeElement = document.getElementById("close");

// Menu versión movil

function showMenu() {
  var isBar = navMenu.classList.contains("bar-menu");
  if(isBar) {
    navMenu.classList.remove("bar-menu");
    navMenu.classList.add("inline");
  }
  else {
    navMenu.classList.remove("inline");
    navMenu.classList.add("bar-menu");
  }
}

iconElement.addEventListener("click", showMenu);
closeElement.addEventListener("click", showMenu);
