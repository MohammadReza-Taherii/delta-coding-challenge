import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import Faq from "./components/Faq";

function App() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={5}>
        <Grid item>
          <Typography mt={10}>
            Coding Challenge - Frontend Developer - DELTABAN
          </Typography>
        </Grid>
        <Grid item>
          <Faq />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
