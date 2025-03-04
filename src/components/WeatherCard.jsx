import { Card, CardBody, CardHeader } from '@heroui/card';
import conditionMap from '../data/weatherConditions';

export default function WeatherCard({ date, high, low, condition, windSpeed }) {
	const { title, icon } = conditionMap[condition] || conditionMap[100];
	const isToday = date === new Date().toLocaleDateString();

	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const isYesterday = date === yesterday.toLocaleDateString();

	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	const isTomorrow = date === tomorrow.toLocaleDateString();

	return (
		<Card
			className={`${(isToday && 'bg-primary-300 night:bg-primary-600') || 'bg-primary-500 night:bg-primary-800'} items-center`}
		>
			<CardHeader className='flex justify-center p-0'>
				<img src={icon} alt={title} className='h-32 w-32' />
			</CardHeader>
			<CardBody className=''>
				<h3 className='text-center text-md font-semibold'>
					{(isToday && 'Today') ||
						(isYesterday && 'Yesterday') ||
						(isTomorrow && 'Tomorrow') ||
						date}
				</h3>
				<p className='text-center text-md font-semibold'>{title}</p>
				<p className='text-center text-md font-semibold'>
					High: {high}°F Low: {low}°F
				</p>
				<p className='text-center text-md font-semibold'>
					Wind Speed: {windSpeed} mph
				</p>
			</CardBody>
		</Card>
	);
}
