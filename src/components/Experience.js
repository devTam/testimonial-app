import { Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import Light from "../images/light.png";
import Dark from "../images/dark.png";
import { ReactComponent as Curve } from "../images/curve.svg";

function Experience({ dark }) {
  return (
    <Box sx={dark ? { backgroundColor: "#222" } : { backgroundColor: "#FFF8F5" }}>
      <Container maxWidth="md">
        {dark ? (
          <Grid container spacing={10} pt={3}>
            <Grid item xs={12} md={6}>
              <Box component="img" src={Dark} width="100%" height="100%" />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              color="white"
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Tolu & Joy's Experience
              </Typography>
              <Chip
                label="CUSTOMER"
                variant="outlined"
                sx={{
                  width: "95px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  padding: 0,
                }}
              />
              <Typography textAlign="justify" mt={2} mb={2}>
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </Typography>

              <Button color="primary" sx={{ width: "fit-content" }}>
                <Box>
                  <Typography textAlign="left" color="white">
                    Share your own story!
                  </Typography>
                  <Curve style={{maxWidth: '190px'}}/>
                </Box>
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={10} pt={3}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Josiah's Experience
              </Typography>
              <Chip
                label="VENDOR"
                variant="outlined"
                color="primary"
                sx={{
                  width: "95px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  padding: 0,
                }}
              />
              <Typography textAlign="justify" mt={2} mb={2}>
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </Typography>

              <Button color="primary" sx={{ width: "fit-content" }}>
                <Box>
                  <Typography textAlign="left">
                    Share your own story!
                  </Typography>
                  <Curve style={{maxWidth: '190px'}}/>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={Light} width="100%" height="100%" />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Experience;
