import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from '../api/weather';

const initialState = {
	location: { name: 'Nashville, Tennessee', lat: 36.1659, lon: -86.7844 },
	currentWeather: {},
	weatherData: {},
	error: false,
	isLoading: false,
};

const locationSlice = createSlice({
	name: 'locationData',
	initialState,
	reducers: {
		setLocation: (state, action) => {
			state.location = action.payload;
		},
		startGetWeatherData: (state) => {
			state.isLoading = true;
			state.error = false;
		},
		getWeatherDataSuccess: (state, action) => {
			state.isLoading = false;
			state.currentWeather = action.payload.currentWeather;
			state.weatherData = action.payload.forecast;
		},
		getWeatherDataFailed: (state) => {
			state.isLoading = false;
			state.error = true;
		},
	},
});

export const {
	setLocation,
	startGetWeatherData,
	getWeatherDataSuccess,
	getWeatherDataFailed,
} = locationSlice.actions;
export default locationSlice.reducer;

export const fetchWeatherData = (location) => async (dispatch) => {
	try {
		dispatch(startGetWeatherData());
		const { currentWeather, forecast } = await getWeatherData(
			location.lat,
			location.lon
		);
		const combinedData = forecast.time.map((time, index) => ({
			time,
			temperature_2m_max: forecast.temperature_2m_max[index],
			temperature_2m_min: forecast.temperature_2m_min[index],
			weathercode: forecast.weathercode[index],
			wind_speed_10m_max: forecast.wind_speed_10m_max[index],
		}));
		dispatch(getWeatherDataSuccess({ currentWeather: currentWeather, forecast: combinedData }));
	} catch (err) {
		dispatch(getWeatherDataFailed());
	}
};
