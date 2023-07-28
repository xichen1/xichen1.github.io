import React, {useState} from "react";


export const ThemeContext = React.createContext(document.body.className);
export const ThemeUpdateContext = React.createContext((theme: string) => {
});

const ThemeContextWrapper = ({children}: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(document.body.className);

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