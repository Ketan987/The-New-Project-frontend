import { AppBar, Avatar, Container, Toolbar, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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
    color: "white",
    textDecoration:"none"
  },
  avatar: {
    float: 'right'
  }
})

const GlobalNavigation = () => {

  const classes = useStyles();
  const menuNames = ["professions", "stories", "paths"]
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters className={classes.root}>
          <Box>
            <Link
            to="/"
            style={{textDecoration:"none", color: "white"}}
              // variant="h6"
              // noWrap
              // component="div"
              // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Link>
          </Box>
          <Box  className={classes.pageName}>
            {menuNames.map((menu: string) => (
              <Box >
                <Link className={classes.PageNameLinks} to={`/${menu}`}>{menu.toUpperCase()}</Link>
              </Box>
            ))}
          </Box>

          <Box>
            <Avatar className={classes.avatar}>
              K
            </Avatar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default GlobalNavigation;