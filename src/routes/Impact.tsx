import { Link, Typography } from "@mui/material";

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

export default function Impact() {
  return (
    <>
      <main style={{ padding: "1rem 0" }}>
        <h2>Impact</h2>
      </main>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}
