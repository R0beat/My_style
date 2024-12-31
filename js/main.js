const menuResponsive = document.getElementById("menu-responsive");
const navUl = document.querySelector("nav ul");

menuResponsive.addEventListener("click", () => {
  navUl.style.display = navUl.style.display === "block" ? "none" : "block";
});
