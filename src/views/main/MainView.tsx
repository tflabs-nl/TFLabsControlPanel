import {Box, Grid2} from "@mui/material";
import AppBar from "components/menu/AppBar.tsx";
import {Navigate, Route, Routes} from "react-router";
import Overview from "views/main/colocation/Overview.tsx";
import background from "assets/background.png";

const RedirectToHome = () =>
{
    return <Navigate to="/colocation" replace />;
}
export default function MainView()
{
    return (
        <>
            <AppBar />
            <Box sx={{ p:0, m:0, display: 'block', minHeight: 'calc(100vh - 64px)', background: `url(${background})` }} >
                <Grid2 container>

                    <Grid2 size="grow">
                    </Grid2>
                    <Grid2 sx={{px: 2, py: 4}} size={{ xs:12, md:12, lg: 10 }}>
                        <Routes>
                            <Route path="/colocation" element={<Overview />} />

                            {/*fallback route, redirects to /colocation*/}
                            <Route path="*" element={<RedirectToHome />} />
                        </Routes>
                    </Grid2>
                    <Grid2 size="grow">
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}