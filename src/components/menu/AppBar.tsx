import {Box, Typography} from "@mui/material";
import Logo from "assets/logo.svg";
import MenuItem from "components/menu/MenuItem.tsx";
import {AnimatePresence, motion, useAnimate, useAnimation} from "framer-motion";
import {Ref, useEffect, useState} from "react";
import ServiceLink from "components/menu/ServiceLink.tsx";
import DomainIcon from "components/menu/icons/DomainIcon.tsx";
import DNSIcon from "components/menu/icons/DNSIcon.tsx";
import ColocationIcon from "components/menu/icons/ColocationIcon.tsx";
import WebHostingIcon from "components/menu/icons/WebHostingIcon.tsx";
import background from "assets/background.png";
import dashboard from "assets/menu/dashboard.svg";
import services from "assets/menu/services.svg";
import settings from "assets/menu/settings.svg";

export default function AppBar(){

    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [menuLinKRef, setMenuLinkRef] = useState<Map<string, HTMLDivElement>>(new Map<string, HTMLDivElement>);


    return (
        <>
            <Box
                onMouseLeave={() => setActiveMenu(null)}
                sx={{
                display: 'flex',
                flexGrow: 1,
                height: '64px'
            }}>
                <Box sx={{ display: 'flex', flexGrow: 1}}>
                    <img src={ Logo } />
                </Box>
                <Box
                    sx={{ display: 'flex', gap: 0.5, alignItems: 'center', justifyContent: 'flex-end', pr: 2 }}>
                    <MenuItem icon={dashboard} setActiveMenuItem={setActiveMenu} name={"Dashboard"} hasMenu={false} />
                    <MenuItem icon={services} ref={ref => setMenuLinkRef((refs) => refs.set("services", ref))} setActiveMenuItem={setActiveMenu} name={"Services"} hasMenu={true} />
                    <MenuItem icon={settings} ref={ref => setMenuLinkRef((refs) => refs.set("settings", ref))} setActiveMenuItem={setActiveMenu} name={"Settings"} hasMenu={true} />
                </Box>
                <Box sx={{ display: 'flex', flexGrow: 1, opacity: 0}}>
                    <img src={ Logo } />
                </Box>
                <AnimatePresence mode="wait">
                    {
                        activeMenu && activeMenu != "dashboard" && <>
                        <Box component={motion.div} transition={{duration: 0.4}} initial={"initial"} variants={{ initial: { left: menuLinKRef.get(activeMenu) ? (menuLinKRef.get(activeMenu).getBoundingClientRect().left + (menuLinKRef.get(activeMenu).getBoundingClientRect().width/2)) : 0} }} animate={{left: menuLinKRef.get(activeMenu).getBoundingClientRect().left + (menuLinKRef.get(activeMenu).getBoundingClientRect().width/2)}} exit={{opacity: 0, display: 'none'}} sx={{position: 'absolute', top: 54, width: '25px', display: 'flex', m:0, p:0, mb: '-3px', borderColor: 'hsla(0,0%,92%,1)', borderWidth: '1px', zIndex: 9999}}>
                            <svg
                                width="25px"
                                height="14px"
                                viewBox="0 0 25 14"
                                version="1.1"
                                id="svg5"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs
                                    id="defs2" />
                                <g
                                    id="layer1"
                                    transform="translate(-75.24208,-76.52164)">
                                    <path
                                        id="path314-0"
                                        style={{fill:"#ffffff", stroke: "#000000", strokeWidth: 0.256989, strokeOpacity:1}}
                                        d="M 100.35698,95.712147 87.960253,78.823159 75.356988,95.702947 c 0,0 4.168975,-8.330249 6.253475,-12.495373 2.08448,-4.165125 1.54422,-6.558818 6.20183,-6.557439 4.65796,0.0014 4.21599,2.395397 6.29816,6.562065 2.08218,4.166668 6.246527,12.5 6.246527,12.5 z"
                                    />
                                    <path
                                        id="path314"
                                        style={{fill:"#ffffff", strokeWidth: 0.256989}}
                                        d="m 100.35698,95.712094 -12.499989,-0.0046 -12.499999,-0.0046 c 0,0 4.16898,-8.33025 6.25347,-12.495373 2.08449,-4.165126 1.544222,-6.558819 6.201836,-6.557439 4.657957,0.0014 4.215987,2.395396 6.298164,6.562064 2.082179,4.166668 6.246518,12.500001 6.246518,12.500001 z"
                                    />
                                </g>
                            </svg>
                        </Box>

                        <Box component={motion.div}  initial={"initial"} variants={{ initial: { left: menuLinKRef.get(activeMenu) ? (menuLinKRef.get(activeMenu).getBoundingClientRect().left + (menuLinKRef.get(activeMenu).getBoundingClientRect().width/2)) : 0} }} animate={{left: menuLinKRef.get(activeMenu).getBoundingClientRect().left + (menuLinKRef.get(activeMenu).getBoundingClientRect().width/2)}} exit={{opacity: 0, display: 'none'}} sx={{position: 'absolute', top: '64px', transform: 'translateX(-50%)', mt: -2, mr: 2}}>
                            <Box component={motion.div} layout style={{ padding:24, backgroundColor: 'white', border: '1px solid hsla(0,0%,92%,1)', borderRadius: 24, marginTop: '19px', boxShadow: "3px 3px 10px 0px #00000040" }}>

                                    {
                                        activeMenu === "services" &&
                                            <Box component={motion.div} initial={{ x: -5 }} animate={{ x: 0 }} exit={{ x: 5 }} transition={{ duration: 0.1, ease: "easeOut" }} style={{display: 'flex', flexDirection: 'row', flexGrow: 1, gap: 16, justifyContent: 'space-around'}} >
                                                <Box component={motion.div} layout style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                                    <ServiceLink name={"Domains"} subtext={"Your place on the internet"} icon={DomainIcon} />
                                                    <ServiceLink name={"DNS"} subtext={"Manage domain routing"} icon={DNSIcon} />
                                                </Box>
                                                <Box component={motion.div} layout style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                                    <ServiceLink name={"Colocation"} subtext={"Manage physical locations"} icon={ColocationIcon} />
                                                    <ServiceLink name={"Web Hosting"} subtext={"Manage website settings"} icon={WebHostingIcon} />
                                                </Box>
                                            </Box>
                                    }
                                    {
                                        activeMenu === "settings" &&
                                            <Box component={motion.div} initial={{ x: 5}} animate={{ x: 0 }} exit={{ x: -5 }} transition={{ duration: 0.1, ease: "easeOut" }} style={{display: 'flex', flexDirection: 'row', flexGrow: 1, gap: 16, justifyContent: 'space-around'}} >
                                                <Box component={motion.div} layout style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                                    <ServiceLink name={"Domains"} subtext={"test"} icon={DomainIcon} />
                                                </Box>
                                                <Box component={motion.div} layout style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                                    <ServiceLink name={"Colocation"} subtext={"Manage locations"} icon={ColocationIcon} />
                                                </Box>
                                            </Box>
                                    }
                            </Box>
                        </Box>
                        </>
                    }
                </AnimatePresence>
            </Box>
        </>
    )

}