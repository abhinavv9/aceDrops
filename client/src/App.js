import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//compenent import
import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Pages/About/AboutPage";
import Home from "./Pages/Home/Home";
import Footer from "./Components/UI/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
