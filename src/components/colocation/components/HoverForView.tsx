import {Box, Typography, useTheme} from "@mui/material";
import {SvgSelection} from "iblis-react-undraw";

export default function HoverForView(){
    const theme = useTheme();

    return (
        <Box sx={{height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', p: 4}}>
            <Box sx={{py: 2, width: 250}}>
                <SvgSelection primarycolor={theme.palette.text.primary}  />
            </Box>
            <Typography variant={"h4"}>Hover over a colocation to display information</Typography>
            <Typography variant={"subtitle1"} sx={{ opacity: 0.7 }}>Hover over the colocation card to display detailed and useful information relevant to your needs. such as Data usage, Power consumption,</Typography>
        </Box>
    )
}