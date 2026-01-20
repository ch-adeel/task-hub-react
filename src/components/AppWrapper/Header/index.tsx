import React from "react";
import { AppBar, Box, Typography, Toolbar, Container } from "@mui/material";
import crud from '../../../assets/crud.png';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="xl"> 
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          
          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Box>

          
          <Box 
            sx={{ 
              position: 'absolute', 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box 
              component="img" 
              src={crud} 
              alt="Logo" 
              sx={{ height: { xs: '30px', sm: '45px' } }}
            />
          </Box>

        
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Typography variant="body1" color="inherit" noWrap>
              UserName
            </Typography>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;