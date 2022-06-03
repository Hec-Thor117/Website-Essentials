const menuIcon = document.getElementsByClassName("menu-icon")[0];
const navBar = document.getElementsByClassName("navigation")[0];

const fakeEmail = document.getElementsByClassName("fake-email")[0];
const modal = document.getElementsByClassName("modal")[0];
const closeBtn = document.getElementsByClassName("close")[0];


menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("active");
	navBar.classList.toggle("open");
});

fakeEmail.addEventListener("click", () => {
	modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

window.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.style.display = "none";
	}
});