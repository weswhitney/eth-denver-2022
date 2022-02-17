import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QRBox from './QRBox';
import { Alert, Card, CardMedia, Checkbox, FormControlLabel, TextField } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Energenics
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [user, setUser] = React.useState();

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  React.useEffect(() => {
    (async () => {
      const username = await getUserInfo();
      setUser(username)
    })()
  }, [])

  return (
    <Container component="main" maxWidth="lg">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          sx={{ mt: 6 }}
        >
          <h3>Sign up to receive Colorado Aware notifications.</h3>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography variant="body1">
              In times of stress on the power grid, you will get a message notifying you when to conserve electricity.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ mt: 6 }}
        >
          {/* <Typography component="h1" variant="h5"> */}
          <h3>Sign up</h3>
          {/* </Typography> */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I agree to receive email messages related to the Flex Alert program."
            />
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
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Card sx={{ maxWidth: 88, boxShadow: 0 }} raised={false} >
            <CardMedia
              component="img"
              image="https://dcs.colorado.gov/sites/dcs/files/styles/image_card/public/CO_Primary_rgb_0.png"
            />
          </Card>
          <h3>Colorado Aware</h3>
        </Box>
      </Grid>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
