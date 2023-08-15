import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? "dark" : "light";

    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === "light" ? "#eaeaea" : "#121212"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <Container>
                <Catalog />
            </Container>
        </ThemeProvider>
    );

    function handleThemeChange() {
        setDarkMode(!darkMode);
    }
}

export default App;
