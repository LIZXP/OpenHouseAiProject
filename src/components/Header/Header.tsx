import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

type Props = {};

const Header: React.FC<Props> = (props) => {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5' sx={{ display: { sm: 'block' } }}>
          OpenHouse.Ai Property List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;