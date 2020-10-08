import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Grid from '@material-ui/core/Grid';

const ErrorPage =(props)=>{
    return (
    <>
        <Header/>
     <Grid container item xs={12} direction="column"
    justify="center"
    alignItems="center"
  >
           <h1>This is error page</h1>   
  </Grid>
    <Footer/>
    </>
    ) 
}




export default ErrorPage;