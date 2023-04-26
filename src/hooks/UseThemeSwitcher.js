import { useEffect, useState } from 'react';

const UseThemeSwitcher = () => {
	const [theme, setTheme] = useState(
		typeof window !== 'undefined' ? localStorage.theme : ''
	);
	// const activeTheme = theme === 'dark' ? 'light' : 'dark';
	const activeTheme = 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		// root.classList.remove(activeTheme);
		// root.classList.add(theme);
		// localStorage.setItem('theme', theme);
		root.classList.add(activeTheme)
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default UseThemeSwitcher;
