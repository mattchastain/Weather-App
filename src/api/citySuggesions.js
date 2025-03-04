const fetchCitySuggestions = async (searchTerm) => {
	try {
		const response = await fetch(
			`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}&limit=5`
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

export { fetchCitySuggestions };
