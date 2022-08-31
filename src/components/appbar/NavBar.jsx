import { Box, Toolbar, AppBar, Avatar } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { pages } from "../../const/pages"
import MobileMenu from "./MobileMenu"
import Nav from "./Nav"
import avatarLogo from '../../assets/images/avatar.png'

const ResponsiveAppBar = () => {
    return (
        <AppBar component="nav" position="sticky">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar alt='avatar' src={avatarLogo}/>
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <MobileMenu pages={pages} />
                </Box>
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    <Nav pages={pages} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default ResponsiveAppBar
