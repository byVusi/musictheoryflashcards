import { BUILD } from "../components/build.js";

function checkAnswerButtonHandler(button, concept) {
	button.addEventListener("click", () => {
		BUILD.answer(concept);
	});
}

function nextButtonHandler(button) {
	button.addEventListener("click", () => {
		window.location.reload();
	});
}

function playButtonHandler(button, url) {
	button.addEventListener("click", () => {
		const audio = document.getElementById("myAudio");
		audio.querySelector("source").src = url;
		audio.load();
		audio.play().catch(console.error);
	});
}

export const HANDLER = {
	CLICK: {
		BUTTON: {
			check: checkAnswerButtonHandler,
			next: nextButtonHandler,
			play: playButtonHandler,
		},
	},
};
