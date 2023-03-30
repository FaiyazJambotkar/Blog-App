import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React from 'react'
import NotesIcon from '@mui/icons-material/Notes';
import InfoIcon from '@mui/icons-material/Info';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

// const SideBar = ({mode,setMode})
const SideBar=()=>{

return (
    
    <Box 
    flex={1} padding={2} 
    sx={{display:{xs:"none",sm:"none",md:"block"}}}>
      <Box position="fixed">
     
      <List>
          <ListItem disablePadding>
            {/* <button> */}
            <ListItemButton component="a" >
              <ListItemIcon>
                <NotesIcon></NotesIcon>
              </ListItemIcon>
              <ListItemText primary="Articles" /> 
            </ListItemButton>
            {/* </button> */}
          </ListItem>
     
          <ListItem disablePadding>
            <ListItemButton  component="a">
              <ListItemIcon>
                <CameraAltIcon></CameraAltIcon>
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>   
            <ListItemButton component="a">
              <ListItemIcon>
               <InfoIcon></InfoIcon>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          
          {/* <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <DarkModeIcon></DarkModeIcon>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem> */}
        </List>
        </Box>
    </Box>
  ) 
}




export default SideBar