import React, { useState } from 'react'
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from 'state'
import { useNavigate } from 'react-router-dom'
import FlexBetween from 'components/FlexBetween'

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
    return (
        <div>Navbar</div>
    )
}

export default Navbar
