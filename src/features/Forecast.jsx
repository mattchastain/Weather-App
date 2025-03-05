import { useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';

import { useDispatch, useSelector } from 'react-redux';
import WeatherCardLoading from '../components/WeatherCardLoading';
import { fetchWeatherData } from '../store/locationSlice';

export default function Forecast() {
	const locationData = useSelector((state) => state.locationData);
	const { location, currentWeather, weatherData, isLoading, error } = locationData;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeatherData(location));
	}, [location]);

	return (
		<div>
			<div className='mx-4 md:mx-20'>
				<div className='flex justify-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='size-6'
					>
						<path
							fillRule='evenodd'
							d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
							clipRule='evenodd'
						/>
					</svg>
					<p>{location.name}</p>
				</div>
				<div className='my-10 flex justify-center'>
					<a
						href='https://open-meteo.com'
						className='underline hover:text-black night:hover:text-gray-500'
					>
						Data from open-meteo.com
					</a>
				</div>
				<div className='mt-2 mb-20 flex flex-wrap justify-center gap-4'>
					{isLoading &&
						Array.from({ length: 8 }, (_, index) => {
							return <WeatherCardLoading key={index} />;
						})}
					{error && <p>There was an error loading the data.</p>}
					{!isLoading && !error && weatherData.length === 0 && (
						<p>No data available.</p>
					)}
					{!isLoading &&
						!error &&
						weatherData.length > 0 &&
						weatherData.map((day, index) => {
							return (
								<WeatherCard
									key={index}
									date={new Date(
										day.time
									).toLocaleDateString()}
									high={day.temperature_2m_max}
									low={day.temperature_2m_min}
									condition={day.weathercode}
									windSpeed={day.wind_speed_10m_max}
									currentWeather={currentWeather}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}
