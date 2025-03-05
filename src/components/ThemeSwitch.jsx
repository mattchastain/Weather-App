import { Button } from '@heroui/button';
import { useEffect, useState } from 'react';

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
			onPress={() => handleToggleNight()}
		>
			<img
				src={`../../public/svg/${(isNight && 'clear-night.svg') || 'clear-day.svg'}`}
				alt=''
			/>
		</Button>
	);
}
