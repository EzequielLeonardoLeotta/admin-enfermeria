import React from 'react'
import { Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function LockAvatar() {
  return (
    <Avatar sx={{ m: 1, bgcolor: '#7c1331' }}>
    <LockOutlinedIcon />
</Avatar>
  )
}

export default LockAvatar