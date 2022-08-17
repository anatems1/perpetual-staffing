import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#53C3A1",
    },
    secondary: {
      main: "#6998DF",
    },
    dull: {
      main: "#D9D9D9",
    },
    darkFooter: {
      main: "#2c2c2c",
    }
  },
  typography: {
    fontFamily: [
      'Inter'
    ],
    h2: {
      fontWeight: 600,
    },
    h5: {
      color: "darkFooter.main",
      fontSize: { xs: "18px", md: "18px", lg: "30px" },
    }
  }
});

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar />
          <Routes basename="/perpetual-staffing">
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Careers" element={<Careers />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
