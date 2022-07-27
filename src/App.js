import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

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
      'Roboto'
    ],
    h2: {
      fontWeight: 600
    },
    h5: {
      color: "darkFooter.main"
    }
  }
});

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Careers" element={<Home />} />
            <Route exact path="/Services" element={<Home />} />
            <Route exact path="/Contact" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
