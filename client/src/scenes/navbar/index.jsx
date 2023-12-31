import React, { useState } from 'react'
import { Box, FormControl, IconButton, InputBase, Select, Typography, useMediaQuery, useTheme } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from 'state'
import { useNavigate } from 'react-router-dom'
import FlexBetween from 'components/FlexBetween'
import { DarkMode, Help, LightMode, Message, Notifications, Search } from '@mui/icons-material'

function Navbar() {
    const [isMobileMenuToggle, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();;
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width:100px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLught = theme.palette.primary.light
    const alt = theme.palette.background.alt;
    
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight={"bold"}
                    fontSize={"clamp(1rem,2rem,2.25rem)"}
                    color={"primary"}
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: primaryLught,
                            cursor: "pointer"
                        }
                    }}
                >
                    Social Aidem</Typography>
                {isNonMobileScreens && (
                    <FlexBetween backgroundColor={neutralLight} borderRadius={"9px"} gap={"3rem"} padding="0.1rem 1.5rem">
                        <InputBase placeholder='Search...' />
                        <IconButton>
                            <Search />
                        </IconButton>

                    </FlexBetween>
                )}
            </FlexBetween>

            {isNonMobileScreens ? (<FlexBetween gap={"2rem"}>
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkMode sx={{ fontSize: "25px" }} />
                    ) : (
                        <LightMode sx={{ color: dark, fontSize: "25px" }} />
                    )

                    }
                </IconButton>
                <Message sx={{ fontSize: "25px" }} />
                <Notifications sx={{ fontSize: "25px" }} />
                <Help sx={{ fontSize: "25px" }} />
                <FormControl variant='standard' value={fullName}>
                    <Select
                    value={fullName}></Select>
                </FormControl>
            </FlexBetween>) : <IconButton></IconButton>}
        </FlexBetween>
    )
}

export default Navbar
