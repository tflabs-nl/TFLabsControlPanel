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
import {useMemo} from "react";
interface IProps {

    id: number;
    name: string;
    location: string;
    rackNumber: string;
    rackSpaces: number[];
    transit: {
        method: '95%' | 'monthly';

        usage_95?: number;
        commit_95?: number;

        usage_monthly?: number;
        commit_monthly?: number;

    }

    onMouseEnter?: () => void;
    onMouseLeave?: () => void;

}

export default function ColocationServiceCard(props: IProps){
    const { id, name, location, rackNumber, rackSpaces, transit, onMouseEnter, onMouseLeave } = props;

    const navigate = useNavigate();
    const theme = useTheme();

    const groupedRackspaces = useMemo(() => RackspaceHelper.groupRackSpaces(rackSpaces), [rackSpaces]);
    const usagePercentage = useMemo(() => {

        switch (transit.method)
        {
            case "monthly":
                return transit.usage_monthly * 100 / transit.commit_monthly;
            case "95%":
                return transit.usage_95 * 100 / transit.commit_95;
            default:
                return 0;
        }

    }, [transit]);

    const handleNavigate = () => {
        navigate(`/colocation/${id}`);
    }

    return (
        <Paper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={{p: 2, minWidth: '350px', maxWidth: '500px', flex: '1 1 0%'}}>

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

            <ItemCard icon={<TransferSpeedSVG />} title={transit.method === '95%' ? "Transfer Speed" : "Transfer Commit"} sx={{mb: 2}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        {
                            transit.method === '95%' && <Typography variant={"subtitle1"}>{transit.usage_95} / {transit.commit_95} Mbit/s</Typography>
                        }
                        {
                            transit.method === 'monthly' && <Typography variant={"subtitle1"}>{transit.usage_monthly} / {transit.commit_monthly} TB</Typography>
                        }

                    </Box>
                    <Box sx={{ mt: -3.5, height: '60px' }}>
                        <CircularProgressWithLabel
                            size={60}
                            thickness={3}
                            disableShrink
                            sx={{
                                color: usagePercentage >= 90 ? '#af0303' : ( usagePercentage >= 70 ? '#dc7b1e' : "#1A9957"),
                                "& circle": {
                                    strokeLinecap: "round"
                                }
                            }}
                            value={usagePercentage}
                        />
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
                <Button fullWidth sx={{ p: 1.5, borderRadius: 5, backgroundColor: "#103722" }} variant={"contained"} onClick={handleNavigate}>
                    Manage
                </Button>
            </Box>

        </Paper>
    )

}