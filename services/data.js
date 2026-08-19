const JSON_URL = "/data.json";

async function fetchData() {
	try {
		const response = await fetch(JSON_URL);
		if (!response.ok) {
			throw new Error(`HTTP Error Status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch failed:", error);
		return {};
	}
}

export const DATA = {
	fetch: fetchData,
};
