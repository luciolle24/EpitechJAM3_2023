// _app.js

import theme from "@/styles/darkTheme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
