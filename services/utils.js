function getRandomInt(start, end) {
	return Math.floor(Math.random() * (end - start + 1)) + start;
}

export const UTILS = {
	randomInteger: getRandomInt,
};
