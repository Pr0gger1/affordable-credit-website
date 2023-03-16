import {createContext} from "react";

export const themes = {
    dark: 'dark',
    light: 'light'
}

const ThemeContext = createContext({
    theme: themes.light,
    setTheme: () => {}
})

export default ThemeContext;