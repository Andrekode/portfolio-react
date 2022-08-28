import React from 'react'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'

function Nav({ pages }) {
    const styleNavLink = { textDecoration: 'none', marginRight: '0.5em' }

    return (
        <>
            {pages.map((page) => (
                <NavLink key={page.home} to={page.route} style={styleNavLink}>
                    <Typography
                        sx={{
                            fontFamily: 'Ubuntu',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: '#ffffff',
                        }}
                    >
                        {page.home}
                    </Typography>
                </NavLink>
            ))}
        </>
    )
}

export default Nav
