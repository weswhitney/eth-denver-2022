import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Box, Card, CardMedia, Container, Divider, Grid, IconButton } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function App() {
  return (
    <Outlet />
  );
}

export default App;
