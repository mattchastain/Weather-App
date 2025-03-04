import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from '../api/weather';

const initialState = {
	location: { name: 'Nashville, Tennessee', lat: 36.1659, lon: -86.7844 },
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
			state.weatherData = action.payload;
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
		const data = await getWeatherData(location.lat, location.lon);
		const combinedData = data.time.map((time, index) => ({
			time,
			temperature_2m_max: data.temperature_2m_max[index],
			temperature_2m_min: data.temperature_2m_min[index],
			weathercode: data.weathercode[index],
			wind_speed_10m_max: data.wind_speed_10m_max[index],
		}));
		dispatch(getWeatherDataSuccess(combinedData));
	} catch (err) {
		dispatch(getWeatherDataFailed());
	}
};
