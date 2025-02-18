import {BrowserRouter, Route, Routes} from "react-router";
import Dashboard from "./views/main/dashboard/Dashboard.tsx";
import {Box, createTheme, ThemeProvider} from "@mui/material";

function App() {

    const theme = createTheme({
        typography: {
            fontFamily: [
                '"Nunito Sans Variable"',
            ].join(','),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{p:0, m:0, fontSize: '16px', color: '#3D3D3D'}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    )
}

export default App
