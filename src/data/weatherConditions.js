const svgPath = '../../public/svg/';

const conditionMap = {
	0: {
		title: 'Clear sky',
		icon: `${svgPath}/clear-day.svg`,
	},
	1: {
		title: 'Mainly clear',
		icon: `${svgPath}/partly-cloudy-day.svg`,
	},
	2: {
		title: 'Partly cloudy',
		icon: `${svgPath}/partly-cloudy-day.svg`,
	},
	3: {
		title: 'Overcast',
		icon: `${svgPath}/overcast.svg`,
	},
	45: {
		title: 'Fog',
		icon: `${svgPath}/fog.svg`,
	},
	48: {
		title: 'Depositing rime fog',
		icon: `${svgPath}/extreme-day-fog.svg`,
	},
	51: {
		title: 'Drizzle: Light intensity',
		icon: `${svgPath}/drizzle.svg`,
	},
	53: {
		title: 'Drizzle: Moderate intensity',
		icon: `${svgPath}/drizzle.svg`,
	},
	55: {
		title: 'Drizzle: Dense intensity',
		icon: `${svgPath}/extreme-drizzle.svg`,
	},
	56: {
		title: 'Freezing Drizzle: Light intensity',
		icon: `${svgPath}/drizzle.svg`,
	},
	57: {
		title: 'Freezing Drizzle: Dense intensity',
		icon: `${svgPath}/extreme-drizzle.svg`,
	},
	61: {
		title: 'Rain: Slight intensity',
		icon: `${svgPath}/raindrop.svg`,
	},
	63: {
		title: 'Rain: Moderate intensity',
		icon: `${svgPath}/raindrops.svg`,
	},
	65: {
		title: 'Rain: Heavy intensity',
		icon: `${svgPath}/extreme-rain.svg`,
	},
	66: {
		title: 'Freezing Rain: Light intensity',
		icon: `${svgPath}/raindrop.svg`,
	},
	67: {
		title: 'Freezing Rain: Heavy intensity',
		icon: `${svgPath}/extreme-rain.svg`,
	},
	71: {
		title: 'Snowfall: Slight intensity',
		icon: `${svgPath}/snow.svg`,
	},
	73: {
		title: 'Snowfall: Moderate intensity',
		icon: `${svgPath}/snow.svg`,
	},
	75: {
		title: 'Snowfall: Heavy intensity',
		icon: `${svgPath}/extreme-snow.svg`,
	},
	77: {
		title: 'Snow grains',
		icon: `${svgPath}/snowflake.svg`,
	},
	80: {
		title: 'Rain showers: Slight intensity',
		icon: `${svgPath}/overcast-rain.svg`,
	},
	81: {
		title: 'Rain showers: Moderate intensity',
		icon: `${svgPath}/overcast-rain.svg`,
	},
	82: {
		title: 'Rain showers: Violent intensity',
		icon: `${svgPath}/overcast-rain.svg`,
	},
	85: {
		title: 'Snow showers: Slight intensity',
		icon: `${svgPath}/snow.svg`,
	},
	86: {
		title: 'Snow showers: Heavy intensity',
		icon: `${svgPath}/extreme-snow.svg`,
	},
	95: {
		title: 'Thunderstorm: Slight or moderate',
		icon: `${svgPath}/thunderstorms-rain.svg`,
	},
	96: {
		title: 'Thunderstorm with slight hail',
		icon: `${svgPath}/thunderstorms-rain.svg`,
	},
	99: {
		title: 'Thunderstorm with heavy hail',
		icon: `${svgPath}/thunderstorms-extreme-rain.svg`,
	},
    100: {
        title: 'N/A',
        icon: `${svgPath}/not-available.svg`
    }
};

export default conditionMap;