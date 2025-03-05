const baseURL = 'https://api.open-meteo.com/v1';

const getWeatherData = async (lat = 36.1659, lon = -86.7844) => {
	const url = `${baseURL}/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode,wind_speed_10m_max&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=7`;
	try {
		console.log('Fetching Data');
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return { currentWeather: data.current_weather, forecast: data.daily };
	} catch (error) {
		console.error('Error fetching weather data:', error);
		return null;
	}
};

export { getWeatherData };
