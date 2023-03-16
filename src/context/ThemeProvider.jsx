import {useEffect, useMemo, useState} from "react";
import ThemeContext, { themes } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || themes.light
    );

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useMemo(() => {
        document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;