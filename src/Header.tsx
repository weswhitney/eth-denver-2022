import { Grid, Card, CardMedia, Button } from "@mui/material"
import { Box } from "@mui/system"

const Header = (Props: {
  handleClickDidOpen: any
  openDid: any
  setOpenDid: any
}) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Card sx={{ maxWidth: 116, boxShadow: 0 }} raised={false}>
          <CardMedia
            component="img"
            image="https://dcs.colorado.gov/sites/dcs/files/styles/image_card/public/CO_Primary_rgb_0.png"
          />
        </Card>
      </Grid>
      <Grid item>
        <h1>Colorado Aware</h1>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item>
        <Box>
          <Button onClick={Props.handleClickDidOpen}>Secure with did</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
