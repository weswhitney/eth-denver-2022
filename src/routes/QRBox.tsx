import React, { useState } from 'react';
import { Box } from '@mui/system'
import QRCode from "react-qr-code";
import { Button } from '@mui/material';

const getUserInfo = async () => {
  const response = await fetch(`https://damp-journey-92337.herokuapp.com/user-info`)
  const respJson = response.json();
  const name = respJson;

  return name;
}
export default function QRBox() {
  const [user, setUser] = useState();
  const codeInfo = `mycolorado://share?Destination=${process.env.REACT_APP_DESTINATION_ID}&Message=thanks+for+id+with-eth-denver-hack-app&callbackUrl=${process.env.REACT_APP_WEBHOOK_URL}`
  
  const handleSignOut = async () => {
    await fetch(`https://damp-journey-92337.herokuapp.com/sign-out`)
    console.log('signed out')
    setUser(undefined)
  }

  React.useEffect(() => {
    (async () => {
      const username = await getUserInfo();
      setUser(username)
    })()
  }, [])

  return (
    <>
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
        <Button variant="contained" onClick={() => {
          handleSignOut();
        }}>Sign Out</Button>
      </Box>
    </>
  );
}
