import  React from 'react';
import { AppBar,Box,Button,Toolbar , Typography,} from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Navbar = () => {
  
  // const Search = styled("div")(()=>({
  //   backgroundColor:"white",
  //   padding: "0 10",
  //   borderRadius: 5,
  //   margin:"8px",
  //   width:"20%",
  //   justifyContent:"space-evenly"
  // }))

  return (
    <>
    {/* #ececec transparent*/}
    <AppBar position='sticky' sx={{ bgcolor: "#ececec",color:"black "}} >
    <StyledToolbar>

         <Typography variant="h6" sx={{padding:"16px", display:{xs:"none",sm:"block"}}}>SEMICOLON 
         </Typography>
    
    <MenuBookIcon sx={{padding:"16px", display:{xs:"block",sm:"none"}}}></MenuBookIcon>

    {/* <Search>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search'}}
            />
     </Search> */}

    <Box sx={{justifyContent:'space-evenly'}}>
      <Link to="/login">
        {/* <Button variant="contained" sx={{backgroundColor: "primary",color:"white", mr: 2 }} >
          Login
        </Button> */}
        {/* <Button component={Link} variant="" to="/login">Login</Button> */}
      </Link>
      </Box>
   
    </StyledToolbar>
    </AppBar>

    </>
  )
}

export default Navbar
