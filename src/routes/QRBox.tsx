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
