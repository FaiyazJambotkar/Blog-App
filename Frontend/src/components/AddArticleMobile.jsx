import { Box, Fab,Tooltip } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

const AddArticleMobile = () => {

  return (
  <>
    <Box sx={{display:{sm:"block",md:"none",},position:"fixed",bottom:70,right:{xs:20,sm:30,md:40}}}>
    <Tooltip >
    <Fab size="large" color="primary" aria-label="Add article">
            <CreateIcon></CreateIcon>
    </Fab>
    </Tooltip>
    </Box>
  </>
  )
}

export default AddArticleMobile