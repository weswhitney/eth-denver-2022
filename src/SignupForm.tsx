import React from "react"
import {
  Grid,
  ButtonGroup,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material"
import { Box } from "@mui/system"

interface SignupFormProps {
  handleEmailClick: () => void
  handleMobileClick: () => void
  formType: string
}

const SignupForm = ({
  handleEmailClick,
  handleMobileClick,
  formType,
}: SignupFormProps) => {
  return (
    <Grid item xs={6} sx={{ mt: 6, pb: 8 }}>
      <h3>Sign up</h3>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <ButtonGroup disableElevation variant="contained">
          <Button
            onClick={() => {
              handleEmailClick()
            }}
            variant={formType === "mobile" ? "outlined" : undefined}
          >
            Email
          </Button>
          <Button
            onClick={() => {
              handleMobileClick()
            }}
            variant={formType === "mobile" ? undefined : "outlined"}
          >
            SMS
          </Button>
        </ButtonGroup>
        {formType === "email" ? (
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
        ) : (
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
              Message and data rates may apply. Message frequency varies but
              should be less than 30 messages/month. Text HELP to 1-855-942-5588
              for help. Text STOP to 1-855-942-5588 to cancel. For inquiries,
              please contact us.
            </Typography>
          </>
        )}
        {formType === "email" ? (
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="I agree to receive email messages related to the Flex Alert program."
          />
        ) : (
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="I agree to receive SMS messages related to the Flex Alert program."
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Grid>
  )
}

export default SignupForm
