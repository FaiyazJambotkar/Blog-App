import { Avatar, Button, Fab, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignupForm = () => {

  const paperSytle={
    padding:30,
    height: '70vh',
    width:280,
    margin:"20px auto", 
  }
  const btnStyle={
    margin:'10px 0'
  }

const navigate =useNavigate()

  return (
    <>
    <Grid>
     <Paper elevation={10} style={paperSytle}>
       <Grid align="center">
       <Avatar sx={{backgroundColor:"#60c736",mb:2,height:60,width:60}}><AddCircleOutlinedIcon></AddCircleOutlinedIcon></Avatar>
 
      </Grid>
      <TextField variant="outlined" label="username" placeholder='choose username' fullWidth required sx={{mb:1}}/>

      <TextField label="password" type="password" placeholder='enter password' fullWidth required sx={{mb:1}}></TextField>

      <TextField label="confirm password" type="password" placeholder='confirm password' fullWidth required ></TextField>
      
      <Button type="submit" style={btnStyle} variant='contained' fullWidth sx={{backgroundColor:"#60c736"}} onClick={()=>{navigate('/')}}>Sign Up
      </Button>

     <Typography>Already have account?
     <Link to="/login"> Sign In</Link>
     </Typography>

     <Fab size="small" color="primary" aria-label="Back to Home" sx={{position:"fixed",bottom:40,left:{xs:20,sm:30,md:40}}}>
        <Link to="/">
        <ArrowBackIcon></ArrowBackIcon>   
        </Link>
     </Fab>

     </Paper>
    </Grid>
   </>
  )
}

// onChange={event=>setValues(prev()=>({...prev,name:event.target.value}))}

export default SignupForm