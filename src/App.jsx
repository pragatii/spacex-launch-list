import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import {BrowserRouter} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

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
                <Box className={'rootContainer'} display={'flex'} flexDirection={'column'}>
                    <Typography component={'h1'} variant={'h4'}>
                        SpaceX Launch Programs
                    </Typography>
                    <Home/>
                    <Typography style={{textAlign: "center"}}>
                        Developed By: Pragati Shekhar
                    </Typography>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
