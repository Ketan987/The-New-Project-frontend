import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';


const GlobalNavigation = () => {

  const menuNames = ["professions", "story", "path"]
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          LOGO
        </Typography>

        {menuNames.map((menu:string) => (
          <div>
            <Link to={`/${menu}`}>{menu.toUpperCase()}</Link>
          </div>
        ))}

        <Avatar>
          K
        </Avatar>

      </Toolbar>
    </AppBar>
  );
}
export default GlobalNavigation;