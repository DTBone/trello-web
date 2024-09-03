import { Box } from '@mui/material'
import React from 'react'
import ModeSelect from '~/components/ModeSelect/ModeSelect'


function AppBar() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            height: (theme) => theme.componentSize.appBarHeight,
            display: 'flex',
            alignItems: 'center',
        }}>
            <ModeSelect />

        </Box >
    )
}

export default AppBar
