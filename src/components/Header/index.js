import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTime from '../../hooks/useTime';

const Header =({selectedUsersCount})=> {
   const time = useTime(); 
  return (
    <>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          {time}
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
        Number of selected users :  {selectedUsersCount}
        </Typography>
        
    </>
  );
}

export default Header;