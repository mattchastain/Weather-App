const svgPath = '../../public/svg/';
import ClearDay from '../assets/svg/clear-day.svg?react';
import {
	default as DrizzleLight,
	default as DrizzleModerate,
} from '../assets/svg/drizzle.svg?react';
import ExtremeDayFog from '../assets/svg/extreme-day-fog.svg?react';
import DrizzleDense from '../assets/svg/extreme-drizzle.svg?react';
import RainExtreme from '../assets/svg/extreme-rain.svg?react';
import SnowExtreme from '../assets/svg/extreme-snow.svg?react';
import Fog from '../assets/svg/fog.svg?react';
import NotAvailable from '../assets/svg/not-available.svg?react';
import OvercastRain from '../assets/svg/overcast-rain.svg?react';
import Overcast from '../assets/svg/overcast.svg?react';
import MainlyClear from '../assets/svg/partly-cloudy-day.svg?react';
import Raindrop from '../assets/svg/raindrop.svg?react';
import Raindrops from '../assets/svg/raindrops.svg?react';
import Snow from '../assets/svg/snow.svg?react';
import Snowflake from '../assets/svg/snowflake.svg?react';
import ThunderstormRainExtreme from '../assets/svg/thunderstorms-extreme-rain.svg?react';
import ThunderstormRain from '../assets/svg/thunderstorms-rain.svg?react';

const conditionMap = {
	0: {
		title: 'Clear sky',
		icon: ClearDay,
	},
	1: {
		title: 'Mainly clear',
		icon: MainlyClear,
	},
	2: {
		title: 'Partly cloudy',
		icon: MainlyClear,
	},
	3: {
		title: 'Overcast',
		icon: Overcast,
	},
	45: {
		title: 'Fog',
		icon: Fog,
	},
	48: {
		title: 'Depositing rime fog',
		icon: ExtremeDayFog,
	},
	51: {
		title: 'Drizzle: Light intensity',
		icon: DrizzleLight,
	},
	53: {
		title: 'Drizzle: Moderate intensity',
		icon: DrizzleModerate,
	},
	55: {
		title: 'Drizzle: Dense intensity',
		icon: DrizzleDense,
	},
	56: {
		title: 'Freezing Drizzle: Light intensity',
		icon: DrizzleLight,
	},
	57: {
		title: 'Freezing Drizzle: Dense intensity',
		icon: DrizzleDense,
	},
	61: {
		title: 'Rain: Slight intensity',
		icon: Raindrop,
	},
	63: {
		title: 'Rain: Moderate intensity',
		icon: Raindrops,
	},
	65: {
		title: 'Rain: Heavy intensity',
		icon: RainExtreme,
	},
	66: {
		title: 'Freezing Rain: Light intensity',
		icon: Raindrop,
	},
	67: {
		title: 'Freezing Rain: Heavy intensity',
		icon: RainExtreme,
	},
	71: {
		title: 'Snowfall: Slight intensity',
		icon: Snow,
	},
	73: {
		title: 'Snowfall: Moderate intensity',
		icon: Snow,
	},
	75: {
		title: 'Snowfall: Heavy intensity',
		icon: SnowExtreme,
	},
	77: {
		title: 'Snow grains',
		icon: Snowflake,
	},
	80: {
		title: 'Rain showers: Slight intensity',
		icon: OvercastRain,
	},
	81: {
		title: 'Rain showers: Moderate intensity',
		icon: OvercastRain,
	},
	82: {
		title: 'Rain showers: Violent intensity',
		icon: OvercastRain,
	},
	85: {
		title: 'Snow showers: Slight intensity',
		icon: Snow,
	},
	86: {
		title: 'Snow showers: Heavy intensity',
		icon: SnowExtreme,
	},
	95: {
		title: 'Thunderstorm: Slight or moderate',
		icon: ThunderstormRain,
	},
	96: {
		title: 'Thunderstorm with slight hail',
		icon: ThunderstormRain,
	},
	99: {
		title: 'Thunderstorm with heavy hail',
		icon: ThunderstormRainExtreme,
	},
	100: {
		title: 'N/A',
		icon: NotAvailable,
	},
};

export default conditionMap;
