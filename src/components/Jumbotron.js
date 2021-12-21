import { Container, Grid, Typography, Box } from "@mui/material";
import jumboImg from "../images/jumbo.png"

function Jumbotron() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={5} mt={1}>
        <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant='h4' sx={{fontWeight: 'bold'}} mb={2}>
            Amazing Experiences from Our Wonderful Customers
          </Typography>
          <Typography>
            Here is what customers and vendors are saying about us, you can share your story with us too.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component='img' src={jumboImg} width='100%' height='100%' />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Jumbotron;
