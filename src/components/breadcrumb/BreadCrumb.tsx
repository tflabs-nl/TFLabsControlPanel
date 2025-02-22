import {Box, Typography, useTheme} from "@mui/material";
import { useNavigate } from "react-router";
interface Crumb {
    clickable: boolean;
    path?: string;
    name: string;
}

interface IProps {

    path: Crumb[]

}

export default function BreadCrumb(props: IProps){
    const { path } = props;
    const navigate = useNavigate();
    const theme = useTheme();

    const handleNavigate = (crumb: Crumb) => {

        if(crumb.clickable){
            navigate(crumb.path);
        }

    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {
                path.map((item, index) => {

                    return (
                        <Box sx={{display: 'flex'}} key={item.name}>
                            <Box onClick={() => handleNavigate(item)} sx={{ px:1, py:1, borderRadius: 1, display: 'flex', '&:hover': item.clickable ? { backgroundColor: theme.palette.grey["300"], cursor: 'pointer' } : undefined }}>
                                <Typography variant={"body1"} color={ index === (path.length - 1) ? "#35B870" : undefined} fontWeight={ index === 0 ? "normal" : "bold"} >{item.name}</Typography>
                            </Box>
                            {
                                index != (path.length - 1) &&
                                <Box sx={{ py:1 }}>
                                    <Typography variant={"body1"} fontWeight={"bold"} >/</Typography>
                                </Box>
                            }
                        </Box>
                    )
                })
            }
        </Box>
    )


}