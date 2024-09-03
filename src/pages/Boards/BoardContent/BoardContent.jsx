import { Box } from '@mui/material'
import React from 'react'

function BoardContent() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            height: (theme) => `calc(100vh - ${theme.componentSize.appBarHeight} - ${theme.componentSize.boardBarHeight})`,
            display: 'flex',
            alignItems: 'center',
        }}>
            Board content
        </Box>
    )
}

export default BoardContent
