import { useEffect } from 'react';
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

const ApplyDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleChange = (event) => {
            const newColorScheme = event.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        };

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', handleChange);

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleChange);
        };
    }, [setDarkMode]);

    return null; 
};

export default ApplyDarkMode;
