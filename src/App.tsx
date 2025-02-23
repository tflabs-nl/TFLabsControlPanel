import {BrowserRouter, Route, Routes} from "react-router";
import AppBar from "components/menu/AppBar.tsx";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import MainView from "views/main/MainView.tsx";

function App() {

    const theme = createTheme({
        typography: {
            fontFamily: [
                '"Josefin Sans"',
            ].join(','),
        },
        palette: {
            text: {
                primary: '#103722'
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        padding: 16,
                        borderRadius: 16,
                        border: "1px solid rgba(53, 184, 112, 0.2)"
                    }
                },
                defaultProps: {
                    elevation: 0,
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{p:0, m:0, fontSize: '16px'}}>
                <BrowserRouter>
                    <MainView />
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    )
}

export default App
