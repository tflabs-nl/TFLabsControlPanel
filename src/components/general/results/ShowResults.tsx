import {ReactElement} from "react";
import {Box} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";

interface IProps{

    showResults: boolean;
    noResultsComponent: ReactElement;
    children?: any;

}

export default function ShowResults(props: IProps){

    const { showResults, noResultsComponent, children } = props;

    return (
        <Box component={motion.div} style={{width: '100%'}}>
            <AnimatePresence mode="wait" >
                {
                    showResults ? <Box key={"results"} component={motion.div} sx={{width: '100%', height: '100%'}} exit={{ opacity: 0 }} transition={{duration: 0.2}}>{children}</Box> :
                                  <Box key={"no-results"} component={motion.div} sx={{width: '100%', height: '100%'}} exit={{ opacity: 0 }} transition={{duration: 0.2}}> {noResultsComponent} </Box>
                }
            </AnimatePresence>
        </Box>
    );

}