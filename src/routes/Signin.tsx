import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Footer from "../Footer"
import InfoBox from "../InfoBox"
import SignupForm from "../SignupForm"
import Header from "../Header"
import DialogBoxDid from "../DialogBoxDid"

const SignIn = () => {
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
      <DialogBoxDid
        handleClickDidClose={handleClickDidClose}
        openDid={openDid}
      />
      <Footer />
    </>
  )
}

export default SignIn
