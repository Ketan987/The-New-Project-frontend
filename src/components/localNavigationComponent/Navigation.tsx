import { AppBar, Avatar, Container, Toolbar, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles ({
  root:{
    display: "flex",
    justifyContent: "space-between"
  },
  pageName:{
    display:"flex",
    flexDirection:"row",
  },
  PageNameLinks:{
    padding: "1.5rem",
    color: "red",
    textDecoration:"none"
  },
  avatar: {
    float: 'right'
  },
  appBar:{
    backgroundColor:"grey !important",
    height: "40px !important",
    marginBottom:"1.5rem"
  }
})

const NavigationLocal = () => {
  const classes = useStyles();
  const menuNames = ["professions", "story", "path"]

    return (
      <AppBar position="static" className={classes.appBar} >
        <Container>
          <Toolbar disableGutters className={classes.root}>
            
            <Box  className={classes.pageName}>

            </Box>
  
           
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default NavigationLocal;