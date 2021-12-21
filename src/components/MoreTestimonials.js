import { Container, Grid } from "@mui/material";
import Testimonial from "./Testimonial";
import Test7 from "../images/test7.svg";
import Test8 from "../images/test8.svg";
import Test9 from "../images/test9.svg";
import Test10 from "../images/test10.svg";
import Test11 from "../images/test11.svg";
import Test12 from "../images/test12.svg";

const data = [
  {
    image: Test7,
    name: "Temi Obadofin",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test8,
    name: "Promise Ejiofor",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test9,
    name: "Feyisola Arinola",
    location: "London, UK",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test10,
    name: "Karen Ibeh",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test11,
    name: "Oluchi Uzo",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test12,
    name: "Amos Okafor",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
];

function Testimonials() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={10} align="between" py={10}>
        {data.map((item) => {
          return (
            <Grid item xs={12} md={4} key={item.name}>
              <Testimonial
                name={item.name}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Testimonials;
