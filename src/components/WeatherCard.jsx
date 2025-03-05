import { Card, CardBody, CardHeader } from '@heroui/card';
import conditionMap from '../data/weatherConditions';

export default function WeatherCard({
	date,
	high,
	low,
	condition,
	windSpeed,
	currentWeather,
}) {
	const isToday = date === new Date().toLocaleDateString();
	const { title, icon } =
		conditionMap[isToday ? currentWeather.weathercode : condition] ||
		conditionMap[100];

	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const isYesterday = date === yesterday.toLocaleDateString();

	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	const isTomorrow = date === tomorrow.toLocaleDateString();

	return (
		<Card
			className={`${(isToday && 'bg-transparent border-primary-300 border-4') || 'bg-primary-500 night:bg-primary-800'} items-center w-56 shadow-none`}
		>
			<CardHeader className='flex items-center flex-col p-0 pt-2'>
				<h3 className='text-center text-lg font-bold'>
					{(isToday && 'Today') ||
						(isYesterday && 'Yesterday') ||
						(isTomorrow && 'Tomorrow') ||
						date}
				</h3>
				<img src={icon} alt={title} className='h-32 w-32' />
			</CardHeader>
			<CardBody>
				{isToday ? (
					<p className='text-center text-2xl font-black'>
						{currentWeather.temperature}°F
					</p>
				) : (
					<div className='flex-1'></div>
				)}
				<p className='text-center text-md font-semibold'>{title}</p>
				<div className='flex justify-between mt-4'>
					<p className='text-md font-semibold'>High:</p>
					<p className='text-md text-primary-200'>{high}°F</p>
				</div>
				<div className='flex justify-between'>
					<p className='text-md font-semibold'>Low:</p>
					<p className='text-md text-primary-200'>{low}°F</p>
				</div>

				<div className='flex justify-between'>
					<p className='text-md font-semibold'>Wind Speed:</p>
					<p className='text-md text-primary-200'>
						{isToday ? currentWeather.windspeed : windSpeed} mph
					</p>
				</div>
			</CardBody>
		</Card>
	);
}
