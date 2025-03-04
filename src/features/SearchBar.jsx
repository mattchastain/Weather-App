import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import debounce from 'lodash/debounce';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCitySuggestions } from '../api/citySuggesions';
import ThemeSwitch from '../components/ThemeSwitch';
import { setLocation } from '../store/locationSlice';

export default function SearchBar() {
	const [suggestions, setSuggestions] = useState([]);
	const dispatch = useDispatch();

	const fetchSuggestions = debounce(async (inputValue) => {
		if (!inputValue || inputValue.length < 2) {
			setSuggestions([]);
			return;
		}

		try {
			const data = await fetchCitySuggestions(inputValue);
			const formattedData = data.map((item) => ({
				name: item.display_name,
				lat: parseFloat(item.lat),
				lon: parseFloat(item.lon),
			}));
			setSuggestions(formattedData);
		} catch (err) {
			console.error(err);
		}
	}, 250);

	const handleInputChange = (inputValue) => {
		console.log('Input changed: ', inputValue);
		fetchSuggestions(inputValue);
	};

	const handleSelectSuggestion = (value) => {
		console.log('Selected value: ', value);
		if (value) {
			const selectedSuggestion = suggestions.find(
				(s) => s.name === value
			);
			if (selectedSuggestion) {
				const newLocation = {
					name: selectedSuggestion.name,
					lat: selectedSuggestion.lat,
					lon: selectedSuggestion.lon,
				};
				dispatch(setLocation(newLocation));
			} else {
				console.warn('Selected value not found: ', value);
			}
		}
	};

	return (
		<div className='flex justify-center items-center m-4 mt-6'>
			<div className='absolute left-2 md:left-6 flex items-center gap-4'>
				<ThemeSwitch />
				<h1 className='invisible md:visible text-xl font-bold'>
					Weather App
				</h1>
			</div>

			<Autocomplete
				placeholder='Search for city'
				type='text'
				onSelectionChange={handleSelectSuggestion}
				onInputChange={handleInputChange}
				aria-labelledby='city-search-label'
				size='lg'
				color='primary'
				radius='full'
				className='w-96'
			>
				{suggestions.map((suggestion) => (
					<AutocompleteItem
						color='primary'
						key={suggestion.name}
						value={suggestion.value}
					>
						{suggestion.name}
					</AutocompleteItem>
				))}
			</Autocomplete>
		</div>
	);
}
