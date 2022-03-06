import { Box, Grid, Typography } from "@mui/material"

const InfoBox = () => {
  return (
    <Grid item xs={6} sx={{ mt: 6, pb: 8 }}>
      <h3>Sign up to receive Colorado Aware notifications.</h3>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Typography variant="body1">
          In times of stress on the power grid, you will get a message notifying
          you when to conserve electricity.
        </Typography>
      </Box>
    </Grid>
  )
}

export default InfoBox
