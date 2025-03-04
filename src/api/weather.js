const baseURL = 'https://api.open-meteo.com/v1';

const dummyData = {
    "time": [
        "2025-03-04",
        "2025-03-05",
        "2025-03-06",
        "2025-03-07",
        "2025-03-08",
        "2025-03-09",
        "2025-03-10",
        "2025-03-11"
    ],
    "temperature_2m_max": [
        70.9,
        63.9,
        49.6,
        59.7,
        60.3,
        56,
        61,
        68
    ],
    "temperature_2m_min": [
        49.1,
        38.2,
        32.1,
        39.5,
        41.4,
        41.4,
        37.8,
        45.7
    ],
    "weathercode": [
        3,
        65,
        71,
        3,
        51,
        51,
        0,
        0
    ],
    "wind_speed_10m_max": [
        22.7,
        27.7,
        17.1,
        16,
        14,
        12,
        8.9,
        14
    ]
}

const getWeatherData = async (lat = 36.1659, lon = -86.7844) => {
	const url = `${baseURL}/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=8`;
	try {
		console.log('Fetching Data');
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.daily;
	} catch (error) {
		console.error('Error fetching weather data:', error);
		return null;
	}
    // return dummyData;
};

export { getWeatherData };
