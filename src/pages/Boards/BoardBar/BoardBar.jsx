import { Box } from '@mui/material'
import React from 'react'

function BoardBar() {
    return (
        <Box sx={{
            backgroundColor: 'secondary.main',
            width: '100%',
            height: (theme) => theme.componentSize.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
        }}>
            Board bar
        </Box>
    )
}

export default BoardBar
