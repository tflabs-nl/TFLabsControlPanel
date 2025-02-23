import {Box, Paper, Typography, useTheme} from "@mui/material";
import BreadCrumb from "components/breadcrumb/BreadCrumb.tsx";
import ColocationServiceCard from "components/colocation/ColocationServiceCard.tsx";
import {SvgSelectedOptions, SvgSelecting, SvgSelection} from "iblis-react-undraw";
import SpeedSVG from "assets/icons/SpeedSVG.tsx";
import HoverForView from "components/colocation/components/HoverForView.tsx";
import ShowResults from "components/general/results/ShowResults.tsx";
import {useMemo, useState} from "react";
import HalfCircleProgress from "components/general/HalfCircleProgress.tsx";

export default function Overview()
{
    const [coloHover, setColoHover] = useState<number|null>(null);

    const handleColocationHover = (id: number) => {
        setColoHover(id);
    }
    const handleColocationUnHover = () => {
        setColoHover(null);
    }

    const coloHoverInfo = useMemo(() => {

        const value = coloHover === 1 ? 70 : (coloHover === 2 ? 500 : 4);
        return {
            value: value,
            color: value >= 90 ? '#af0303' : (value >= 70 ? '#dc7b1e' : '#1A9957')
        }

    }, [coloHover])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <BreadCrumb path={[
                    {
                        clickable: false,
                        name: 'Service'
                    },
                    {
                        clickable: true,
                        path: '/colocation',
                        name: 'Colocation'
                    }
                ]} />

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 2 }}>
                    <ColocationServiceCard

                        id={1}
                        name={"NorthC - Amsterdam"}
                        location={"kabelweg 48"}
                        rackNumber={"E1-A14"}
                        rackSpaces={[10,11,12,13,20,30,31,32,33,34]}

                        transit={{
                            method: '95%',
                            usage_95: 140,
                            commit_95: 200,
                        }}

                        onMouseEnter={() => handleColocationHover(1)}
                        onMouseLeave={() => handleColocationUnHover()}

                    />
                    <ColocationServiceCard

                        id={2}
                        name={"NorthC - Amsterdam"}
                        location={"kabelweg 48"}
                        rackNumber={"E1-A14"}
                        rackSpaces={[10,11,12,13,20,30,31,32,33,34]}


                        transit={{
                            method: '95%',
                            usage_95: 1000,
                            commit_95: 200,
                        }}

                        onMouseEnter={() => handleColocationHover(2)}
                        onMouseLeave={() => handleColocationUnHover()}
                    />
                    <ColocationServiceCard

                        id={3}
                        name={"NorthC - Amsterdam"}
                        location={"kabelweg 48"}
                        rackNumber={"E1-A14"}
                        rackSpaces={[10,11,12,13,20,30,31,32,33,34]}

                        transit={{
                            method: 'monthly',
                            usage_monthly: 7,
                            commit_monthly: 180,
                        }}

                        onMouseEnter={() => handleColocationHover(3)}
                        onMouseLeave={() => handleColocationUnHover()}
                    />
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'block' }, ml: 2, width: 400 }}>

                <Box display={'flex'} gap={1} sx={{ py: 1 }}>
                    <SpeedSVG />
                    <Typography variant={'body1'}>Info</Typography>
                </Box>

                <Paper sx={{minHeight: '450px', height: 'calc(90dvh - 128px)'}}>
                    <ShowResults showResults={true || coloHover != null} noResultsComponent={<HoverForView />}>
                        <Box sx={{display: 'flex', mb: 2}}>
                            <Typography variant={"caption"} fontSize={14}>DATA USAGE</Typography>
                        </Box>
                        <Box display={'flex'} gap={2} sx={{justifyContent: 'center' }}>
                            <HalfCircleProgress value={ coloHoverInfo.value } thickness={4} size={200} />
                            <Box sx={{ justifyItems: 'center', alignContent: 'center' }}>
                                <Typography sx={{ fontSize: 18, color: coloHoverInfo.color}} >130 TB of</Typography>
                                <Typography sx={{ fontSize: 24}} >500 TB</Typography>
                            </Box>
                        </Box>
                    </ShowResults>
                </Paper>
            </Box>
        </Box>
    )
}