import { Avatar, Card, Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  customer: {
    width: "95px",
    borderRadius: "4px",
    fontSize: "11px",
    color: "#0D019A",
    backgroundColor: "#EEF8FF",
    padding: 0,
    fontWeight: "bold",
  },
  vendor: {
    width: "95px",
    borderRadius: "4px",
    fontSize: "11px",
    color: "#049A01",
    backgroundColor: "#F0FFEE",
    padding: 0,
    fontWeight: "bold",
  },
  margin: {
      marginLeft: "16px",
  },
  nomargin: {
        marginLeft: "0px",
    },
}));

function Testimonial({ image, name, location, title, text }) {
  const classes = useStyles();

  return (
    <Card elevation={0}>
      <Avatar sx={{ height: "100px", width: "100px" }}>
      <Box component="img" src={image} width="100%" height="100%" />
      </Avatar>
      <Typography mt={2} sx={{ fontWeight: 600 }}>
        {name}
      </Typography>
      <Box sx={location && { display: "flex", alignItems: "center" }}>
        {location && <Typography>{location}</Typography>}
        <Box className={location ? classes.margin : classes.nomargin}>
          <Chip
            label={title}
            className={title === "CUSTOMER" ? classes.customer : classes.vendor}
          />
        </Box>
      </Box>
      <Typography mt={2}>{text}</Typography>
    </Card>
  );
}

export default Testimonial;
