import { Container, Grid } from "@mui/material";
import Testimonial from "./Testimonial";
import Test1 from "../images/test1.svg";
import Test2 from "../images/test2.svg";
import Test3 from "../images/test3.svg";
import Test4 from "../images/test4.svg";
import Test5 from "../images/test5.svg";
import Test6 from "../images/test6.svg";

const data = [
  {
    image: Test1,
    name: "Joseph Ike",
    location: "London, UK",
    title: "CUSTOMER",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test2,
    name: "Adetola Fashina",
    location: "London, UK",
    title: "CUSTOMER",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test3,
    name: "Emmanuel Fayemi",
    location: "London, UK",
    title: "CUSTOMER",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test4,
    name: "Chisom Obilor",
    location: "London, UK",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test5,
    name: "Adunoluwa Adeyemi",
    location: "London, UK",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  {
    image: Test6,
    name: "Chidi Okeke",
    location: "London, UK",
    title: "VENDOR",
    text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
];

function Testimonials() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={10} align="between" py={10}>
        {data.map((item) => (
          <Grid item xs={12} md={4} key={item.name}>
            <Testimonial
              name={item.name}
              image={item.image}
              location={item.location}
              title={item.title}
              text={item.text}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
