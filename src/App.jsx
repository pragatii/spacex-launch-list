import React from 'react';
import './App.css';
import {createMuiTheme} from "@material-ui/core";
import Home from "./components/Home/Home";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {BrowserRouter} from "react-router-dom";

function App() {
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                mobile: 700,
                tablet: 1024,
                desktop: 1440,
            },
        },
        palette: {
            primary: {
                main: '#4a5390'
            },
            secondary: {
                main: '#c6d99f'
            }
        }
    });

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Home/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
