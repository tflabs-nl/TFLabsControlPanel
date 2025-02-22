import {Box, Button, Paper, SvgIcon, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ColocationIcon from "components/menu/icons/ColocationIcon.tsx";
import LocationSVG from "assets/icons/LocationSVG.tsx";
import DatacenterRackSVG from "assets/icons/DatacenterRackSVG.tsx";
import TransferSpeedSVG from "assets/icons/TransferSpeedSVG.tsx";
import Chip from "components/general/Chip.tsx";
import ItemCard from "components/colocation/components/ItemCard.tsx";
import CircularProgressWithLabel from "components/general/CircularProgressWithLabel.tsx";
import RackspaceSVG from "assets/icons/RackspaceSVG.tsx";
import {RackspaceHelper} from "core/helpers/rackspace/RackspaceHelper.ts";
interface IProps {

    id: number;
    name: string;
    location: string;
    rackNumber: string;
    rackSpaces: number[];
    transit: { }

}

export default function ColocationServiceCard(props: IProps){
    const { id, name, location, rackNumber, rackSpaces } = props;

    const navigate = useNavigate();
    const theme = useTheme();

    const groupedRackspaces = RackspaceHelper.groupRackSpaces(rackSpaces);

    const handleNavigate = () => {
        navigate(`/colocation/${id}`);
    }

    return (
        <Paper elevation={0} sx={{p:2, borderRadius: 4, minWidth: '400px', maxWidth: '500px', border: "1px solid rgba(53, 184, 112, 0.2)"}}>

            <Typography variant={"h4"} sx={{marginLeft: '-3px'}}>{name}</Typography>
            <Box sx={{display: 'flex', mb: 1, color: theme.palette.grey.A700 }}>
                <Box display={'flex'} sx={{alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ height: theme.spacing(2.5) }}>
                        <LocationSVG fill={ theme.palette.grey.A700 } />
                    </Box>
                    <Typography variant={"subtitle1"}>{location}</Typography>
                </Box>
                <Typography variant={"subtitle1"} sx={{px:2, width: 4, textAlign: 'center' }}>|</Typography>
                <Box display={'flex'} sx={{alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ height: theme.spacing(2.25) }}>
                        <DatacenterRackSVG fill={ theme.palette.grey.A700 } />
                    </Box>
                    <Typography variant={"subtitle1"}>{rackNumber}</Typography>
                </Box>
            </Box>

            <ItemCard icon={<TransferSpeedSVG />} title={"Transfer Speed"} sx={{mb: 2}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant={"subtitle1"}>100 / 150 Mbit/s</Typography>
                    </Box>
                    <Box sx={{ mt: -3.5, height: '60px' }}>
                        <CircularProgressWithLabel size={60} thickness={3} disableShrink sx={{color: "#1A9957", "& circle": { strokeLinecap: "round" } }} value={80} />
                    </Box>
                </Box>
            </ItemCard>

            <ItemCard icon={<RackspaceSVG />} title={"Rackspaces"} sx={{mb: 2}}>
                <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                    {
                        groupedRackspaces.map((item, index) => <Chip key={`groupedRackspace-${rackNumber}-${index}`} text={item} />)
                    }
                </Box>
            </ItemCard>

            <Box>
                <Button fullWidth sx={{ p: 1.5, borderRadius: 5, backgroundColor: "#103722" }} variant={"contained"}>
                    Manage
                </Button>
            </Box>

        </Paper>
    )

}