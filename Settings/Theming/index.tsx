import { useEffect, useState } from 'react';

export const themeSwitcher = () => {

    const [theme, setTheme] = useState('dark');
  
    const changeTheme = (newTheme:string = undefined) => {
        const baseThemeMap = {
            'light':'dark',
            'dark':'light',
        }

        let themeName = newTheme
        if (!themeName){
            themeName = baseThemeMap[theme] || 'dark'
        }
        
        window.localStorage.setItem('theme', themeName)
        setTheme(themeName)
    };
  
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      if (!localTheme){
          window.localStorage.setItem('theme', 'dark')
      }
      
      localTheme && setTheme(localTheme);
    }, []);
  
    return [theme, changeTheme]
};
  
  
