import { HANDLER } from "../services/handlers.js";

function buildCard() {
	const card = document.createElement("div");
	card.classList.add("card");
	return card;
}

function buildHeader(title) {
	const header = document.createElement("h5");
	header.classList.add("card-header", "font");
	header.textContent = title;
	return header;
}

function buildSymbol(title) {
	const symbol = document.createElement("h5");
	symbol.classList.add("symbol");
	symbol.textContent = title;
	return symbol;
}

function buildButton(title = "Check answer") {
	const button = document.createElement("button");
	button.classList.add("card-button");
	button.textContent = title;
	return button;
}

function buildPlayButton() {
	const button = document.createElement("button");
	button.classList.add("play-button");
	button.textContent = "🔊";
	button.title = "Listen to pronounciation";
	return button;
}

function getAnswer(concept) {
	const screen = document.createElement("div");
	screen.classList.add("answer");

	document.body.append(screen);

	const answer = document.querySelector(".answer");

	const button = buildButton("Next");
	HANDLER.CLICK.BUTTON.next(button);

	setTimeout(() => {
		const container = document.createElement("div");
		const header = document.createElement("h5");
		header.classList.add("font");
		header.textContent = concept.meaning;
		container.append(header);
		if (concept.description.trim() !== "") {
			const box = document.createElement("div");
			box.classList.add("description-box");
			box.textContent = concept.description;
			container.append(box);
		}
		container.append(button);
		answer.append(container);
	}, 1000);
}

export const BUILD = {
	card: buildCard,
	header: buildHeader,
	symbol: buildSymbol,
	button: buildButton,
	answer: getAnswer,
	play: buildPlayButton,
};
