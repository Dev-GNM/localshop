import React from 'react'
import spinner from './spinner.gif'
import Grid from '@mui/material/Grid'

const Spinner = () => {
  return (
      <Grid item >
      
        
        <img src={spinner} style={{"height":"90px"}} alt="spinner" />
          
    </Grid>
  )
}

export default Spinner