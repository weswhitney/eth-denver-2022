import * as React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Alert, Dialog, DialogContent, DialogTitle } from "@mui/material"
import Footer from "../Footer"
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined"
import InfoBox from "../InfoBox"
import SignupForm from "../SignupForm"
import Header from "../Header"

export default function SignIn() {
  const [formType, setFormType] = React.useState("email")
  const [openDid, setOpenDid] = React.useState(false)

  const handleEmailClick = () => {
    setFormType("email")
  }

  const handleMobileClick = () => {
    setFormType("mobile")
  }

  const handleClickDidOpen = () => {
    setOpenDid(true)
  }

  const handleClickDidClose = () => {
    setOpenDid(false)
  }

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Header handleClickDidOpen={handleClickDidOpen} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <InfoBox />
          <SignupForm
            handleEmailClick={handleEmailClick}
            handleMobileClick={handleMobileClick}
            formType={formType}
          />
        </Grid>
      </Container>
      <Dialog open={openDid} onClose={handleClickDidClose}>
        <Box sx={{ textAlign: "center" }}>
          <KeyOutlinedIcon fontSize="large" />
        </Box>
        <DialogTitle sx={{ textAlign: "center" }}>Digital Identity</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate sx={{ mt: 1, textAlign: "center" }}>
            <Grid container>
              <Grid item>
                <Typography>
                  To protect your privacy your data is encrypted with your
                  personal key
                </Typography>
                <Alert severity="info">
                  did:ewc:0xFF556Beb6d00d5a2B80ff41F85717A37761f2275
                </Alert>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
      <Footer />
    </>
  )
}
