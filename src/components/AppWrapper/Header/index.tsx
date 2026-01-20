import React from "react";
// import styles from 'index.scss';
import { AppBar, Box, Grid, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
// import styles from './index.scss'
import crud from '../../../assets/crud.png'
// import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
const index = () => {
  return (
    <>      
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > 
             </IconButton>
             <Grid container alignItems="center" >
                <Grid item xs={4} sm={3}>
                    <Typography variant="h6" color="inherit" noWrap>DashBoard</Typography>
                </Grid>
                <Grid item xs={4} sm={6} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Box component="img" src={crud} alt="Logo" sx={{ height:{ xs: '30px', sm: '40px'}
                }}
                />
                    
                    </Grid>  
                    <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "flex-end"}}>
                       <Typography variant="body1" color="inherit" noWrap>
                        UserName
                        </Typography> 
                    </Grid>
             </Grid>
          </Toolbar>
        </AppBar>
      
    </>
  );
};

export default index;
