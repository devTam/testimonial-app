import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import footerImg from "../images/footer.png";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#25201D",
    minHeight: "500px",
  },
  image: {},
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    "@media (min-width: 900px)": {
      maxWidth: "900px",
    },
    "@media (min-width: 600px)": {
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
  textField: {
    width: "100%",
    color: "white",
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "6px",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
}));

function Footer() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  return (
    <Box component="footer" className={classes.footer} pb={10}>
      <Container>
        <Grid container spacing={10} color="white" p={5}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={footerImg}
              sx={{ maxWidth: "300px", marginTop: "-70px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Be a member of our community 🎉
            </Typography>
            <Typography mb={3} mt={3}>
              We'd make sure you are always first to know what's happening on
              Vasiti-thus, the world
            </Typography>
            <TextField
              id="standard-name"
              label="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.textField}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "white", color: "black" }}
                  >
                    Subscribe
                  </Button>
                ),
                style: {
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={10} color="white">
          <Grid item xs={12} md={8}>
            <Grid container spacing={10}>
              <Grid item xs={6} md={3}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Company
                </Typography>
                <List>
                  <ListItem disablePadding>About Us</ListItem>
                  <ListItem disablePadding>Term of Use</ListItem>
                  <ListItem disablePadding>Privacy Policy</ListItem>
                  <ListItem disablePadding>Press & Media</ListItem>
                </List>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Products
                </Typography>
                <List>
                  <ListItem disablePadding>Marketplace</ListItem>
                  <ListItem disablePadding>Magazine</ListItem>
                  <ListItem disablePadding>Seller</ListItem>
                  <ListItem disablePadding>Wholesale</ListItem>
                  <ListItem disablePadding>Services</ListItem>
                </List>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Careers
                </Typography>
                <List>
                  <ListItem disablePadding>Become a Campus Rep</ListItem>
                  <ListItem disablePadding>Become a Vasiti influencer</ListItem>
                  <ListItem disablePadding>Become a Campus Writer</ListItem>
                  <ListItem disablePadding>Become an Affiliate</ListItem>
                </List>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Get in touch
                </Typography>
                <List>
                  <ListItem disablePadding>Contact us</ListItem>
                  <ListItem disablePadding>Partner with us</ListItem>
                  <ListItem disablePadding>Advertize with us</ListItem>
                  <ListItem disablePadding>Help/FAQs</ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography mb={3}>Join our community</Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography mt={3}>Email Newsletter</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
