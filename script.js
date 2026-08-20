import { DATA } from "services/data.js";
import { UTILS } from "services/utils.js";
import { RENDER } from "components/render.js";

const data = await DATA.fetch();
const grades = Object.keys(data);

function chooseGrade(start, end) {
	return UTILS.randomInteger(start, end);
}

function chooseTopic(grade) {
	const _data = data[grades[grade - 1]];
	const topics = Object.keys(_data);
	const length = topics.length;
	return topics[UTILS.randomInteger(0, length - 1)];
}

function chooseConcept(grade, topic) {
	const _data = data[grades[grade - 1]][topic];
	const length = _data.length;
	return _data[UTILS.randomInteger(0, length - 1)];
}

const grade = chooseGrade(1, 3);
const topic = chooseTopic(grade);
const concept = chooseConcept(grade, topic);

if (concept === undefined) window.location.reload();

RENDER.card(concept);
