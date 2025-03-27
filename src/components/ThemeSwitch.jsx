import { Button } from '@heroui/button';
import { useEffect, useState } from 'react';
import ClearDay from '../assets/svg/clear-day.svg?react';
import ClearNight from '../assets/svg/clear-night.svg?react';

const root = document.querySelector(':root');

export default function ThemeSwitch() {
	const [isNight, setIsNight] = useState(false);
	const handleToggleNight = () => {
		setIsNight(!isNight);
	};

	useEffect(() => {
		root.className = '';
		root.classList.toggle(`${isNight ? 'night' : 'day'}`);
	}, [isNight]);

	return (
		<Button
			className='p-1 min-w-10 min-h-10 bg-primary-500 night:bg-primary-800'
			aria-label='toggle theme'
			onPress={() => handleToggleNight()}
		>
			<img src={isNight ? ClearNight : ClearDay} alt='icon' />
		</Button>
	);
}
