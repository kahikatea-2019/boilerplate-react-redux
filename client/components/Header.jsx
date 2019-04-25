import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default class Header extends React.Component {
  render () {
    return (
      <>
      <Grid container
        justify="center">
        <Typography className='header' variant="h1" gutterBottom>
          Natalie's Quiz
        </Typography>
      </Grid>
      </>
    )
  }
}
