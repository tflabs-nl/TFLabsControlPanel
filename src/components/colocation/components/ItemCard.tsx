import {Box, Paper, SxProps, Theme, Typography} from "@mui/material";
import {ReactElement} from "react";

interface IProps{

    icon: ReactElement;
    title: string;
    children: any;
    sx?: SxProps<Theme>;

}
export default function ItemCard(props: IProps)
{
    const { icon, title, children, sx } = props;
    return (
        <Paper sx={{p:2, borderRadius: 4, border: "1px solid rgba(53, 184, 112, 0.4)", ...sx}}>
            <Box sx={{display: 'flex', textAlign: 'right', alignItems: 'center', gap: 1}}>
                <Box sx={{height: '20px'}}>{ icon }</Box>
                <Typography variant={"subtitle1"}>{title}</Typography>
            </Box>

            {children}

        </Paper>
    )
}