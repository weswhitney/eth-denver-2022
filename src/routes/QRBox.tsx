import React, { useState } from 'react';
import { Box } from '@mui/system'
import QRCode from "react-qr-code";
import { Button } from '@mui/material';

export default function QRBox() {
  const codeInfo = `mycolorado://share?Destination=${process.env.REACT_APP_DESTINATION_ID}&Message=you+are+logged+into+Energenics!+find+open+tab+in+browser+and+refresh&callbackUrl=${process.env.REACT_APP_WEBHOOK_URL}`
  
  return (
    <>
      <Box
        sx={{
          height: 300,
        }}
      >
        <QRCode value={codeInfo} />
      </Box>
    </>
  );
}




// <Typography component="h1" variant="h5">
//               Sign in with myColorado
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               {user ? <div> hello {user} </div> : <QRBox />}
//               <Alert severity="info">Use your smartphone to scan the QR code from your myColorado app. Refresh this page after confirming</Alert>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={() => {
//                   handleSignOut();
//                 }}
//               >
//                 Sign Out
//               </Button>
//               <Grid container>
//                 <Grid item>
//                   <Link href="https://mycolorado.state.co.us/home" variant="body2" target="blank">
//                     {"Don't have an myColorado account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>