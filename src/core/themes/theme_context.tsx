import {createContext, useCallback, useContext, useState} from 'react';

import lightTheme from './light';
import darkTheme from './dark';
import Theme from './theme_interface';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({theme: lightTheme, toggleTheme: () => {}});

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  //useCallback Hooku, bir fonksiyonun değişmeden kalmasını sağlar.
  //Bu, performansı artırmak için kullanılabilir çünkü React,
  //fonksiyonların her çağırıldığında yeniden oluşturulduğunu ve
  //yeniden render edildiğini varsayar. Böylece, useCallback ile
  //tanımlanmış bir fonksiyon, belirtilen dependency değişmeden
  //kalırsa, aynı referansı kullanmaya devam eder ve yeniden
  //oluşturulmaz.Bu toggleTheme() fonksiyonu için kullanılmıştır
  //çünkü theme değişirse fonksiyon yeniden oluşturulmamalıdır.

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
const theme = useContext(ThemeContext);

export {ThemeContext, ThemeProvider, theme};
