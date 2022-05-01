import { AppBar, Avatar, Container, Toolbar, Typography, Box, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

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
    backgroundColor:"#FCFFE7 !important",
    height: "60px !important",
    marginBottom:"1.5rem",

  }
})

const NavigationLocal = () => {
  const classes = useStyles();
  const menuNames = ["professions", "story", "path"]
  const navigate = useNavigate();

    return (
      <AppBar position="relative" className={classes.appBar} >
        <Container >
          <Toolbar disableGutters className={classes.root}>
            
            <Box  className={classes.pageName}>
            <Button variant="contained" onClick={() => {
                navigate('/story/create')
            }}>create</Button>
            </Box>
  
           
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default NavigationLocal;