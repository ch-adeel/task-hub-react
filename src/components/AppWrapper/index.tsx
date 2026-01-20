// Components/AppWrapper/index.tsx
import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const AppWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <SideNav />
        {/* This Box is where your Dashboard will actually render */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}> 
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppWrapper;