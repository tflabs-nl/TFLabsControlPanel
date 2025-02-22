import {Box, Typography} from "@mui/material";
import BreadCrumb from "components/breadcrumb/BreadCrumb.tsx";
import ColocationServiceCard from "components/colocation/ColocationServiceCard.tsx";

export default function Overview()
{
    return (
        <Box>
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

            <Box sx={{ display: 'flex' }}>
                <ColocationServiceCard

                    id={1}
                    name={"NorthC - Amsterdam"}
                    location={"kabelweg 48"}
                    rackNumber={"E1-A14"}
                    rackSpaces={[10,11,12,13,20,30,31,32,33,34]}

                />
            </Box>

        </Box>
    )
}