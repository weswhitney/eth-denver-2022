import React, { useState } from 'react';
import { Box, ThemeProvider } from '@mui/system'
import QRCode from "react-qr-code";

const getUserInfo = async () => {
  const response = await fetch(`https://damp-journey-92337.herokuapp.com/url`)
  const respJson = await response.json();
  const name = respJson[0];

  return name;
}

export default function QRBox() {
  const [user, setUser] = useState();
  const codeInfo = `mycolorado://share?Destination=${process.env.REACT_APP_DESTINATION_ID}&Message=thanks+for+id+with-eth-denver-hack-app&callbackUrl=${process.env.REACT_APP_WEBHOOK_URL}`

  React.useEffect(() => {
    (async () => {
      const username = await getUserInfo();
      setUser(username)
    })()
  }, [])

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
        <div>hello {user}</div>
      </Box>
    </ThemeProvider>
  );
}
