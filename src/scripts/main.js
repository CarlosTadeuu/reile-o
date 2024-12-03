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
});

function diminuirOpacity() {
	const body = document.querySelector(".background__body");
	body.classList.add("body--is-opacity");
}
function aumentaOpacity() {
	const body = document.querySelector(".background__body");
	body.classList.remove("body--is-opacity");
}
