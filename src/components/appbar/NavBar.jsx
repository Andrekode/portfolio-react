import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import AdbIcon from '@mui/icons-material/Adb'
import { pages } from '../../const/pages'
import MobileMenu from './MobileMenu'
import Nav from './Nav'

const ResponsiveAppBar = () => {
    return (
        <AppBar component="nav" position="sticky">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <AdbIcon />
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                    }}
                >
                    <MobileMenu pages={pages} />
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}
                >
                    <Nav pages={pages} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default ResponsiveAppBar
