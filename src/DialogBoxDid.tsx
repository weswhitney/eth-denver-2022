import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Alert,
} from "@mui/material"
import { Box } from "@mui/system"
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined"

interface DialogBoxProps {
  handleClickDidClose: () => void
  openDid: boolean
}

const DialogBoxDid = ({ handleClickDidClose, openDid }: DialogBoxProps) => {
  return (
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
  )
}

export default DialogBoxDid
