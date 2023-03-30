import { Avatar, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import './Main.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Main = () => {
  const [isregistered,setisregistered]=useState(false)

  const clickHandler = () =>{
    setisregistered(!isregistered)
  }
    
  return (
    <div className='MainContainer'>
        <div className='form'>
            
        <Avatar sx={{backgroundColor:"#1976d2",height:70,width:70}}><AccountCircleIcon></AccountCircleIcon></Avatar>
  
        <TextField variant="outlined" label="username" placeholder='enter username'  fullWidth required></TextField>
       <TextField label="password" type="password" placeholder='enter password'  fullWidth required></TextField>
       <Button type="submit" color="primary" variant='contained' fullWidth >Sign in
       
       </Button>

      <Typography>
      {/* <Link to="/signup"> Sign up</Link> */}
      {/* {isregistered && <div className='toggle' onClick={clickHandler} >Sign In</div>} */}
      {!isregistered && <div onClick={clickHandler} >Dont have an account? <span className='toggle'>Register</span></div>}
      {isregistered && <div onClick={clickHandler} >Already have an account? <span className='toggle'>Sign In</span></div>}
      </Typography>

        </div>

        <div className='image'>
            <h1 className='semi'>Semi</h1>
            <h1 className='colon'>Colon</h1>
        </div>
    </div>
  )
}

export default Main