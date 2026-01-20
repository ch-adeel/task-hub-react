// features/dashboard/index.tsx
import React from 'react';
import { Typography, Paper } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4">Dashboard Overview</Typography>
      <Typography>Welcome to your CRUD application.</Typography>
      {/* Your Create/Update/Delete logic goes here */}
    </Paper>
  );
};

export default Dashboard;