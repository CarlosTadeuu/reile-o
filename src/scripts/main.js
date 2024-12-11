document.addEventListener("DOMContentLoaded", function () {
	const bodySection = document.querySelector(".header");
	const alturaBody = bodySection.clientHeight;

	window.addEventListener("scroll", function () {
		let posicaoAtual = window.scrollY;
		if (posicaoAtual <= 0 || posicaoAtual < alturaBody) {
			aumentaOpacity();
		} else {
			diminuirOpacity();
		}
	});
	const hamburgerMenu = document.querySelector(".hamburger-menu");
	const nav = document.querySelector(".header__nav");

	hamburgerMenu.addEventListener("click", () => {
		nav.classList.toggle("active");
		hamburgerMenu.classList.toggle("active");
	});
});

function diminuirOpacity() {
	const body = document.querySelector(".background__body");
	body.classList.add("body--is-opacity");
}
function aumentaOpacity() {
	const body = document.querySelector(".background__body");
	body.classList.remove("body--is-opacity");
}
