const menuIcon = document.getElementsByClassName("container");
const navBar = document.getElementsByClassName("navigation");

menuIcon[0].addEventListener("click", () => {
	menuIcon[0].classList.toggle("active");
	navBar[0].classList.toggle("open");
});