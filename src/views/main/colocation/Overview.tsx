import {Box, Paper, Typography, useTheme} from "@mui/material";
import BreadCrumb from "components/breadcrumb/BreadCrumb.tsx";
import ColocationServiceCard from "components/colocation/ColocationServiceCard.tsx";
import {SvgSelectedOptions, SvgSelecting, SvgSelection} from "iblis-react-undraw";
import { ScaleLinear } from 'd3-scale';
import SpeedSVG from "assets/icons/SpeedSVG.tsx";
import HoverForView from "components/colocation/components/HoverForView.tsx";
import ShowResults from "components/general/results/ShowResults.tsx";
import {useMemo, useState} from "react";
import HalfCircleProgress from "components/general/HalfCircleProgress.tsx";
import PowerPlugSVG from "assets/icons/PowerPlugSVG.tsx";
import {areaElementClasses, LineChart, MarkElement, MarkElementProps, useDrawingArea, useYScale} from "@mui/x-charts";
import {ChartsYReferenceLine} from "@mui/x-charts/ChartsReferenceLine/ChartsYReferenceLine";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import dayjs from "dayjs";
import Chip from "components/general/Chip.tsx";

type ColorSwichProps = {
    color1: string[];
    color2: string[];
    id: string[];
};

function ColorSwich({ color1, color2, id }: ColorSwichProps) {
    const { top, height, bottom } = useDrawingArea();
    const svgHeight = top + bottom + height;

    const scale = useYScale() as ScaleLinear<number, number>; // You can provide the axis Id if you have multiple ones
    // const y0 = scale(threshold); // The coordinate of of the origine
    // const off = y0 !== undefined ? y0 / svgHeight : 0;

    return (
        <defs>
            {
                id.map((mainKey, index) => {
                    return (
                        <linearGradient
                            key={mainKey}
                            id={mainKey}
                            x1="0"
                            x2="0"
                            y1="0"
                            y2={`${svgHeight}`}
                            gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
                        >
                            <stop offset={'0%'} stopColor={color1[index]} />
                            <stop offset={'70%'} stopColor={color2[index]} />
                        </linearGradient>
                    )
                })
            }

        </defs>
    );
}

export default function Overview()
{
    const [coloHover, setColoHover] = useState<number|null>(null);
    const theme = useTheme();

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

    const slotsMark = (props: MarkElementProps) => {

        return (
            <MarkElement {...props} classes={{root: "customMarkElement"}} />
        )
    }

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
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', ml: 2, width: 400, maxHeight: { lg: 'calc(90dvh - 128px)' } }}>

                <Box display={'flex'} gap={1} sx={{ py: 1 }}>
                    <SpeedSVG />
                    <Typography variant={'body1'}>Info</Typography>
                </Box>

                {/* minHeight: '450px', */}
                <Paper sx={{overflowY: 'auto'}}>
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
                        <Box sx={{display: 'flex', mt: 4}} gap={1}>
                            <PowerPlugSVG />
                            <Typography variant={"caption"} fontSize={14}>POWER CONSUMPTION</Typography>
                        </Box>
                        <Box >
                            <LineChart
                                sx={{
                                    [`& .${areaElementClasses.root}`]: {
                                        fill: 'url(#swich-color-id-1)',
                                    },
                                    "& .customMarkElement": {
                                        scale: "0.7",
                                    },
                                    [`& .MuiChartsAxis-tickLabel`]: {
                                        fill: theme.palette.grey["A700"]
                                    },
                                    [`& .MuiChartsAxis-line`]: {
                                        stroke: theme.palette.grey["A700"]
                                    },
                                    [`& .MuiChartsAxis-tick`]: {
                                        stroke: theme.palette.grey["A700"]
                                    }
                                }}
                                xAxis={[{
                                    scaleType: 'time',
                                    data: [
                                        dayjs("2025-02-23 00:00").unix() * 1000,
                                        dayjs("2025-02-23 08:00").unix() * 1000,
                                        dayjs("2025-02-23 16:00").unix() * 1000,
                                        dayjs("2025-02-24 00:00").unix() * 1000,
                                        dayjs("2025-02-24 08:00").unix() * 1000,
                                        dayjs("2025-02-24 16:00").unix() * 1000
                                    ],
                                    valueFormatter: (value, context) => {

                                       switch (context.location)
                                       {
                                           case "tooltip":
                                           case "legend":
                                               return `${dayjs(value).format("DD-MM-YYYY HH:mm")}`;
                                           case "tick":
                                               return `${dayjs(value).format("DD MMM HH:mm")}`
                                       }

                                        return context.location === "tooltip" ? `${dayjs(value).format("DD-MM-YYYY HH:mm")}` : `${value}`
                                    }
                                }]}
                                yAxis={[{
                                    valueFormatter: (value, context) => `${value} kW`
                                }]}
                                series={[
                                    {
                                        data: [0.8, 1.2, 1.1, 0.9, 1.3, 1.2],
                                        area: true,
                                        showMark: true,
                                        color: "rgba(97,160,125,0.6)",
                                        valueFormatter: (value) => `${value} kW`
                                    }
                                ]}
                                slots={{
                                    mark: slotsMark,
                                }}
                                height={250}
                            >
                                <ColorSwich
                                    color1={["#61A07D"]} // green
                                    color2={["#FFFFFF"]} // white
                                    id={["swich-color-id-1"]}
                                />
                                <ChartsYReferenceLine y={1.5} lineStyle={{ stroke: 'red' }} label="Commit" />
                            </LineChart>
                        </Box>
                        <Box sx={{display: 'flex', mt: 4}} gap={1}>
                            <AcUnitIcon />
                            <Typography variant={"caption"} fontSize={14}>TEMPERATURE MONITORING</Typography>
                        </Box>
                        <Box >
                            <LineChart
                                sx={{
                                    // [`& .${areaElementClasses.root}`]: {
                                    //     fill: 'url(#swich-color-id-2)',
                                    // },
                                    [`& .MuiAreaElement-series-auto-generated-id-0`]: {
                                        fill: 'url(#swich-color-id-3)',
                                    },
                                    [`& .MuiAreaElement-series-auto-generated-id-1`]: {
                                        fill: 'url(#swich-color-id-2)',
                                    },
                                    "& .customMarkElement": {
                                        scale: "0.7",
                                    },
                                    [`& .MuiChartsAxis-tickLabel`]: {
                                        fill: theme.palette.grey["A700"]
                                    },
                                    [`& .MuiChartsAxis-line`]: {
                                        stroke: theme.palette.grey["A700"]
                                    },
                                    [`& .MuiChartsAxis-tick`]: {
                                        stroke: theme.palette.grey["A700"]
                                    }
                                }}
                                xAxis={[{
                                    scaleType: 'time',
                                    data: [
                                        dayjs("2025-02-23 00:00").unix() * 1000,
                                        dayjs("2025-02-23 08:00").unix() * 1000,
                                        dayjs("2025-02-23 16:00").unix() * 1000,
                                        dayjs("2025-02-24 00:00").unix() * 1000,
                                        dayjs("2025-02-24 08:00").unix() * 1000,
                                        dayjs("2025-02-24 16:00").unix() * 1000
                                    ],
                                    valueFormatter: (value, context) => {

                                       switch (context.location)
                                       {
                                           case "tooltip":
                                           case "legend":
                                               return `${dayjs(value).format("DD-MM-YYYY HH:mm")}`;
                                           case "tick":
                                               return `${dayjs(value).format("DD MMM HH:mm")}`
                                       }

                                        return context.location === "tooltip" ? `${dayjs(value).format("DD-MM-YYYY HH:mm")}` : `${value}`
                                    }
                                }]}
                                yAxis={[{
                                    valueFormatter: (value, context) => `${value}°C`
                                }]}
                                series={[
                                    {
                                        label: "Hot Aisle Temperature",
                                        data: [28, 28, 30, 30, 31, 29],
                                        area: true,
                                        showMark: true,
                                        color: "#D06400",
                                        valueFormatter: (value) => `${value}°C`,
                                    },
                                    {
                                        label: "Intake Air Temperature",
                                        data: [22, 22, 23, 23, 24, 22],
                                        area: true,
                                        showMark: true,
                                        color: "rgba(97,160,125,0.6)",
                                        valueFormatter: (value) => `${value}°C`,
                                    },
                                ]}
                                slots={{
                                    mark: slotsMark,
                                }}
                                height={250}
                            >
                                <ColorSwich
                                    color1={["#61A07D", "#D06400"]} // green
                                    color2={["#FFFFFF", "#FFFFFF"]} // white
                                    id={["swich-color-id-2", "swich-color-id-3"]}
                                />
                            </LineChart>

                            <Box sx={{display: 'flex', gap: 2, justifyContent: 'center'}}>
                                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                    <Chip sx={{color: "#1A9957", borderColor: "#1A9957", '& span': { px: 1, py:0.5}}} text={"23 °C"} />
                                    <Typography fontSize={12} variant={'body1'}>Intake air</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                    <Chip sx={{color: "#D06400", borderColor: "#D06400", '& span': { px: 1, py:0.5}}} text={"35 °C"} />
                                    <Typography fontSize={12} variant={'body1'}>Hot aisle</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </ShowResults>
                </Paper>
            </Box>
        </Box>
    )
}