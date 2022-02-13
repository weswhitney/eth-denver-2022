import * as React from 'react';
import { Box, ThemeProvider } from '@mui/system'
import QRCode from "react-qr-code";

export default function QRBox() {
  const codeInfo = 'mycolorado://share?Destination=1545&ControlCode=12345&Message=thanks+for+id+with-eth-denver-hack-app&callbackUrl=http://9c2b-2601-282-177f-e050-f518-ebd1-babc-bb95.ngrok.io/hook'
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
