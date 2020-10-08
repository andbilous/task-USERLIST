import React from 'react';
import Typography from '@material-ui/core/Typography';
import './style.scss'


const Footer =()=>(
  <footer>
  <Typography variant="h6" color='textPrimary' align="center" gutterBottom>
    Footer
  </Typography>
  <Typography variant="subtitle1" color='textPrimary' align="center" component="span">
    Something here to give the footer a purpose!
  </Typography>
</footer>
  )

export default Footer;