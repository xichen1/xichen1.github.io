import React, {useState} from "react";
import {isBrowser} from "@src/lib/checkUtil";

export const ThemeContext = React.createContext(!isBrowser ? "" : document.body.className);
export const ThemeUpdateContext = React.createContext((theme: string) => {
});

const ThemeContextWrapper = ({children}: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(!isBrowser ? "" : document.body.className);

    const updateTheme = (currentTheme: string) => {
        setTheme(currentTheme === "light" ? "light" : "dark");
    };

    return <ThemeContext.Provider value={theme}>
        <ThemeUpdateContext.Provider value={updateTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>;
};

export default ThemeContextWrapper;