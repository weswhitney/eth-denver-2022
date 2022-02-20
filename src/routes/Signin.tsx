import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QRBox from './QRBox';
import { Alert, ButtonGroup, Card, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, TextField } from '@mui/material';
import Footer from '../Footer';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const theme = createTheme();

export default function SignIn() {
  const [user, setUser] = React.useState();
  const [formType, setFormType] = React.useState('email');
  const [open, setOpen] = React.useState(false);
  const [openDid, setOpenDid] = React.useState(false)

  const handleEmailClick = () => {
    setFormType('email')
  }

  const handleMobileClick = () => {
    setFormType('mobile')
  }

  const handleClickDidOpen = () => {
    setOpenDid(true);
  };

  const handleClickDidClose = () => {
    setOpenDid(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUserInfo = async () => {
    const response = await fetch(`https://damp-journey-92337.herokuapp.com/user-info`)
    const respJson = response.json();
    const name = respJson;

    return name;
  }

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
      <Container component="main" maxWidth="lg">
        <Grid container>
          <Grid item xs={1}>
            <Card sx={{ maxWidth: 116, boxShadow: 0 }} raised={false} >
              <CardMedia
                component="img"
                image="https://dcs.colorado.gov/sites/dcs/files/styles/image_card/public/CO_Primary_rgb_0.png"
              />
            </Card>
          </Grid>
          <Grid item>
            <h1>Colorado Aware</h1>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item>
            <Box>
              <Button onClick={handleClickDidOpen}>Secure with did</Button>
            </Box>
            <IconButton
              aria-label="wallet"
              onClick={handleClickOpen}
            >
              <AccountBalanceWalletOutlinedIcon fontSize="large" />
            </IconButton>
            {user ? <div>hello {user}</div> : null }
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            sx={{ mt: 6, pb: 8 }}
          >
            <h3>Sign up to receive Colorado Aware notifications.</h3>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography variant="body1">
                In times of stress on the power grid, you will get a message notifying you when to conserve electricity.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ mt: 6, pb: 8 }}
          >
            <h3>Sign up</h3>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <ButtonGroup disableElevation variant="contained">
                <Button
                  onClick={() => {
                    handleEmailClick()
                  }}
                  variant={formType === 'mobile' ? 'outlined' : undefined}
                >
                  Email
                </Button>
                <Button
                  onClick={() => {
                    handleMobileClick()
                  }}
                  variant={formType === 'mobile' ? undefined : 'outlined'}
                >
                  SMS
                </Button>
              </ButtonGroup>
              {formType === 'email' ?
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                /> :
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="mobile number"
                    label="Mobile number"
                    type="phone-number"
                    id="phone-number"
                    autoComplete="phone-number"
                    autoFocus
                  />
                  <Typography variant="caption" display="block" gutterBottom>
                    Message and data rates may apply. Message frequency varies but should be less than 30 messages/month. Text HELP to 1-855-942-5588 for help. Text STOP to 1-855-942-5588 to cancel. For inquiries, please contact us.
                  </Typography>
                </>
              }
              {formType === 'email' ? <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I agree to receive email messages related to the Flex Alert program."
              /> : <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I agree to receive SMS messages related to the Flex Alert program."
              />}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="https://mycolorado.state.co.us/home" variant="body2" target="blank">
                    {"Already subscribed? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Container>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Card sx={{ maxWidth: 88, boxShadow: 0 }} raised={false} >
              <CardMedia
                component="img"
                image="https://dcs.colorado.gov/sites/dcs/files/styles/image_card/public/CO_Primary_rgb_0.png"
              />
            </Card>
            <h3>Colorado Aware</h3>
          </Box>
          </Container>
        </Grid>
      </Container>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{textAlign: 'center'}}>Sign in with myColorado</DialogTitle>
          <DialogContent>
            <Box component="form" noValidate sx={{ mt: 1, textAlign: 'center' }}>
              {user ? <div> hello {user} </div> : <QRBox />}
              <Alert severity="info">Use your smartphone to scan the QR code from your myColorado app. Refresh this page after confirming</Alert>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  handleSignOut();
                }}
              >
                Sign Out
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="https://mycolorado.state.co.us/home" variant="body2" target="blank">
                    {"Don't have an myColorado account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openDid} onClose={handleClickDidClose}>
          <Box sx={{textAlign: 'center'}}>
            <KeyOutlinedIcon fontSize="large" />
          </Box>
          <DialogTitle sx={{textAlign: 'center'}}>Digital Identity</DialogTitle>
          <DialogContent>
            <Box component="form" noValidate sx={{ mt: 1, textAlign: 'center' }}>
              <Grid container>
                <Grid item>
                  <Typography>
                    To protect your privacy your data is encrypted with your personal key
                  </Typography>
                  <Alert severity="info">did:ewc:0xFF556Beb6d00d5a2B80ff41F85717A37761f2275</Alert>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </>
  );
}
