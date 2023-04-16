import { UNLA } from '@/utils/constants/routes'
import { Link, Typography } from '@mui/material'
import React from 'react'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href={`${UNLA}`}>
                {"UNLa"}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Copyright