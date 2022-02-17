import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Box, Card, CardMedia, Container, Divider, Grid } from '@mui/material';

function App() {
  return (
    <>
    <Container className="App" maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Card sx={{ maxWidth: 116, boxShadow: 0 }} raised={false} >
          <CardMedia
            component="img"
            image="https://dcs.colorado.gov/sites/dcs/files/styles/image_card/public/CO_Primary_rgb_0.png"
          />
        </Card>
        <h1>Colorado Aware</h1>
      </Box>
      {/* <nav
        style={{
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Signin</Link> |{" "}
        <Link to="impact">Impact</Link>
      </nav> */}
      </Container>
      {/* <Divider /> */}
      <Outlet />
    </>
  );
}

export default App;
