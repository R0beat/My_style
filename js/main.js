const menuResponsive = document.getElementById("menu-responsive");
const navUl = document.querySelector("nav ul");

if (menuResponsive) {
  menuResponsive.addEventListener("click", (e) => {
    navUl.style.display = navUl.style.display === "block" ? "none" : "block";
  });
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementById("close");
let cerrar = () => {
  modal.style.display = "none";
};

btn.onclick = function () {
  modal.style.display = "block";
  modal.style.transition = ".35s ease-in-out";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
