import { BUILD } from "./build.js";
import { UTILS } from "../services/utils.js";
import { HANDLER } from "../services/handlers.js";

const body = document.body;

function renderCard(concept) {
	console.log(concept);
	const name = concept.name;
	const shortName = concept.shortName;
	const symbol = concept.symbol;
	const soundURL = concept.sound;

	const card = BUILD.card();

	const header = getHeader(concept, { name, shortName, symbol });

	const button = BUILD.button();
	HANDLER.CLICK.BUTTON.check(button, concept);

	const div = document.createElement("div");
	div.classList.add("button-container");

	if (concept.hasSound === "true") {
		const playBtn = BUILD.play();
		HANDLER.CLICK.BUTTON.play(playBtn, soundURL);
		div.append(playBtn);
	}

	div.append(button);

	card.append(header, div);
	body.append(card);
}

function getHeader(concept, options = {}) {
	const { name, shortName, symbol } = options;
	let header;
	if (concept?.hasSymbol === "true" && concept?.hasShortName === "true") {
		const randomNumber = UTILS.randomInteger(1, 3);
		switch (randomNumber) {
			case 1:
				header = BUILD.header(name);
				break;
			case 2:
				header = BUILD.header(shortName);
				break;
			case 3:
				header = BUILD.symbol(symbol);
				break;
			default:
				header = BUILD.header("Oops! Something went wrong");
		}
	} else if (concept?.hasSymbol === "true") {
		const randomNumber = UTILS.randomInteger(1, 2);
		switch (randomNumber) {
			case 1:
				header = BUILD.header(name);
				break;
			case 2:
				header = BUILD.symbol(symbol);
				break;
			default:
				header = BUILD.header("Oops! Something went wrong");
		}
	} else if (concept?.hasShortName === "true") {
		const randomNumber = UTILS.randomInteger(1, 2);
		switch (randomNumber) {
			case 1:
				header = BUILD.header(name);
				break;
			case 2:
				header = BUILD.header(shortName);
				break;
			default:
				header = BUILD.header("Oops! Something went wrong");
		}
	} else {
		header = BUILD.header(name);
	}

	return header;
}

export const RENDER = {
	card: renderCard,
};
