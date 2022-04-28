import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <About />
      </div>
    </Router>
  );
}

export default App;
