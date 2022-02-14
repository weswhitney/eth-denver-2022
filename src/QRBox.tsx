import * as React from 'react';
import { Box, ThemeProvider } from '@mui/system'
import QRCode from "react-qr-code";



export default function QRBox() {
  const codeInfo = `mycolorado://share?Destination=${process.env.REACT_APP_DESTINATION_ID}&ControlCode=12345&Message=thanks+for+id+with-eth-denver-hack-app&callbackUrl=${process.env.REACT_APP_WEBHOOK_URL}`

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0059B2',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          bgcolor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <QRCode value={codeInfo} />
      </Box>
    </ThemeProvider>
  );
}
