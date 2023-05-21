// _app.js

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import LightTheme from "@/styles/lightTheme";
import DarkTheme from "@/styles/darkTheme";

function MyApp({ Component, pageProps }) {
    const [currentTheme, setCurrentTheme] = useState(LightTheme);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === LightTheme ? DarkTheme : LightTheme);
    };

    return (
        <ThemeProvider theme={currentTheme}>
            <Component {...pageProps} toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

export default MyApp;
