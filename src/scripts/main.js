window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 250) {
		hideHeaderBackground();
	} else {
		showHeaderBackground();
	}
});

function hideHeaderBackground() {
	const header = document.querySelector(".header");
	header.classList.add("header--is-opacity");
}

function showHeaderBackground() {
	const header = document.querySelector(".header");
	header.classList.remove("header--is-opacity");
}
