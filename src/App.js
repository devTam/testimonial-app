import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import MoreTestimonials from "./components/MoreTestimonials";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5C00',
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Jumbotron />
      <Experience dark={true} />
      <Testimonials />
      <Experience dark={false} />
      <MoreTestimonials />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
