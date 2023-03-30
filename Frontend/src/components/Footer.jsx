import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Paper sx={{display:{lg:"none",md:"none"} ,position:'relative', marginTop:1, bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
  showLabels>
  <BottomNavigationAction label="Instagram" icon={<InstagramIcon/>} />
  <BottomNavigationAction label="Facebook" icon={<FacebookIcon/>} />
  <BottomNavigationAction label="Twitter" icon={<TwitterIcon/>} />
</BottomNavigation>
</Paper>
  )
}

export default Footer