import React, { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"

export default function MobileMenu({ pages }) {
    const iconButton = useRef(null)
    const [anchorElNav, setAnchorElNav] = useState(null)

    const styleNavLink = { textDecoration: "none", textTransform: "uppercase" }

    const handleOpenNavMenu = () => {
        setAnchorElNav(iconButton.current)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                ref={iconButton}
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                {Boolean(anchorElNav) ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                {pages.map((page) => (
                    <MenuItem
                        component={NavLink}
                        to={page.route}
                        style={styleNavLink}
                        key={page.home}
                        onClick={handleCloseNavMenu}
                    >
                        <Typography textAlign="center">{page.home}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
