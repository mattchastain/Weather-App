import { Card, CardBody, CardHeader } from '@heroui/card';
import { useEffect, useState } from 'react';
// import { getWeather } from '../api/weather.js';
const svgPath = '../../public/svg/';

export default function TodaysWeather() {
	const [weather, setWeather] = useState({ high: 0, low: 0 });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			setLoading(true);

			try {
				const data = await getWeather();
				if (data) {
					setWeather({ high: data.high, low: data.low });
				} else {
					setError('Failed to fetch data');
				}
			} catch (err) {
				setError('Failed to fetch data');
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, []);

	return (
		<Card className='my-12 mx-auto w-[180px] bg-primary-50 night:bg-primary-800 items-center'>
			<CardHeader className='flex justify-center p-0'>
				<img
					src={`${svgPath}/moonrise.svg`}
					alt='Sunny'
					className='h-32 w-32'
				/>
			</CardHeader>
			<CardBody className=''>
				{/* <p className='text-primary-800 night:text-foreground text-center text-md'>
					Clear
				</p> */}
				{loading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!loading &&
					!error &&
					weather.high !== null &&
					weather.low !== null && (
						<p className='text-primary-800 night:text-foreground text-center text-md'>
							{`H: ${weather.high}° L: ${weather.low}°`}
						</p>
					)}
			</CardBody>
		</Card>
	);
}
