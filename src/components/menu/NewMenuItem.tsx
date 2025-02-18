import {Box, Typography} from "@mui/material";
import {motion} from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Ref} from "react";


interface IProps{
    name: string;
    hasMenu: boolean;
    icon: string;
    ref?: Ref<HTMLDivElement>;
    setActiveMenuItem: (item: string) => void;
}

export default function NewMenuItem(props: IProps)
{
    const {name, hasMenu, icon, ref, setActiveMenuItem} = props;

    const typographySx = {};

    typographySx['&:hover'] = {
        backgroundColor: '#dcdcdc',
        borderRadius: 6,
    };

    return (
        <Box
            onMouseEnter={() => setActiveMenuItem(name.toLowerCase())}
            ref={ref}
            component={motion.div}
            sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 1.5,
                py: 1,
                color: '#103722',
                cursor: "pointer",
                ...typographySx,
            }}
            whileHover="hover"
            initial="initial"
        >
            <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                <img src={ icon } />
                <Typography>{name}</Typography>
                {hasMenu && (
                    <motion.div
                        variants={{
                            initial: { scaleY: 1, y: 0 },
                            hover: { scaleY: -1, y: -3 }
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ display: "inline-block" }}
                    >
                        <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
                    </motion.div>
                )}</Box>
        </Box>
    )

}