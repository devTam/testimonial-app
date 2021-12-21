import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Light from "../images/light.png";
import Dark from "../images/dark.png";
import Success from "../images/success.png";
import { ReactComponent as Curve } from "../images/curve.svg";
import { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClearIcon from "@mui/icons-material/Clear";

function Experience({ dark }) {
  const [openShareModal, setOpenShareModal] = useState(false);
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [success, setSuccess] = useState(false);
  const toggleModal = () => setOpenShareModal(!openShareModal);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const shareStory = () => {
    setSuccess(true);
  };

  return (
    <Box
      sx={dark ? { backgroundColor: "#222" } : { backgroundColor: "#FFF8F5" }}
    >
      <Container maxWidth="md">
        {openShareModal && (
          <Dialog open={openShareModal} onClose={toggleModal}>
            <DialogTitle fontWeight="bold" sx={{ textAlign: "center" }}>
              {!success ? (
                <Typography variant="h5">Share your amazing story!</Typography>
              ) : (
                <Box component="img" src={Success} sx={{ maxWidth: "300px" }} />
              )}
            </DialogTitle>
            <DialogContent>
              {success ? (
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }} mb={2}>
                    Thank you for<br /> sharing your story!
                  </Typography>
                  <Typography>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Typography>
                </Box>
              ) : (
                <>
                  <Box my={2}>
                    <Typography>Upload your Picture</Typography>
                    <OutlinedInput
                      placeholder="Choose image"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      endAdornment={!image ? <AttachFileIcon /> : <ClearIcon />}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                  <Grid container my={2}>
                    <Grid item xs={12} md={5}>
                      <Typography>First Name</Typography>
                      <OutlinedInput
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={2}></Grid>
                    <Grid item xs={12} md={5}>
                      <Typography>Last Name</Typography>
                      <OutlinedInput
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>

                  <Box my={2}>
                    <Typography>Share your story</Typography>
                    <TextField
                      multiline
                      rows={4}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    my={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      What did you interact with Vasiti as?
                    </Typography>
                    <RadioGroup
                      row
                      aria-label="title"
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="customer"
                        control={<Radio />}
                        label="Customer"
                      />
                      <FormControlLabel
                        value="vendor"
                        control={<Radio />}
                        label="Vendor"
                      />
                    </RadioGroup>
                  </Box>
                  <Box my={2}>
                    <Typography>
                      City or Higher Institution (for students)
                    </Typography>
                    <OutlinedInput
                      placeholder="Choose city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </>
              )}
            </DialogContent>
            <DialogActions sx={{ padding: "30px 10px" }}>
              {success ? (
                <Button
                  color="primary"
                  size="large"
                  sx={{ margin: "0 auto" }}
                  variant="contained"
                  onClick={toggleModal}
                >
                  Close
                </Button>
              ) : (
                <Button
                size="large"
                  disabled={
                    !image || !firstName || !lastName || !text || !title
                  }
                  color="primary"
                  variant="contained"
                  onClick={shareStory}
                >
                  Share your story
                </Button>
              )}
            </DialogActions>
          </Dialog>
        )}
        {dark ? (
          <Grid
            container
            spacing={10}
            pt={3}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column-reverse",
              },
            }}
          >
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

              <Button
                color="primary"
                sx={{ width: "fit-content" }}
                onClick={toggleModal}
              >
                <Box>
                  <Typography textAlign="left" color="white">
                    Share your own story!
                  </Typography>
                  <Curve style={{ maxWidth: "190px" }} />
                </Box>
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            spacing={10}
            pt={3}
            sx={{
              "@media (max-width: 600px)": {
                flexDirection: "column-reverse",
              },
            }}
          >
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

              <Button
                color="primary"
                sx={{ width: "fit-content" }}
                onClick={toggleModal}
              >
                <Box>
                  <Typography textAlign="left">
                    Share your own story!
                  </Typography>
                  <Curve style={{ maxWidth: "190px" }} />
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
