import {Box, Typography} from "@mui/material";
import {cloneElement, ReactElement, useState} from "react";
import {motion} from "framer-motion";

interface IProps{
    name: string;
    subtext: string;
    icon: (props?: {fill: string|undefined;}) => ReactElement;
}

export default function ServiceLink(props: IProps)
{
    const { name, subtext, icon } = props;

    const [highlightHover, setHighlightHover] = useState(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }} onMouseEnter={() => setHighlightHover(true)} onMouseLeave={() => setHighlightHover(false)}>
            <Box sx={{ display: 'flex', backgroundColor: highlightHover ? "#35B870" : undefined, borderRadius: 3, border: '1px solid #8D8D8D', width: '48px', height: '48px', justifyContent: 'center', alignItems: 'center', mr: 2}}>
                { icon({ fill: highlightHover ? "#FFFFFF" : undefined }) }
            </Box>
            <Box component={motion.div} initial="initial" variants={{ initial: { opacity: 0} }} animate={{ opacity: 1 }} sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography>{ name }</Typography>
                <Typography variant={'body2'}><motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.15 }} // Small delay after resize
                    style={{color: highlightHover ? "#35B870" : undefined}}
                >{ subtext }</motion.span></Typography>

            </Box>

        </Box>
    )
}