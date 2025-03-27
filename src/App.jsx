import ThemeSwitch from './components/ThemeSwitch.jsx';
import Forecast from './features/Forecast.jsx';
import SearchBar from './features/SearchBar.jsx';

export default function App() {
	return (
		<>
			<ThemeSwitch />
			<SearchBar />
			<Forecast />
		</>
	);
}
