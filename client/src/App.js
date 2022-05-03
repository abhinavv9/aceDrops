import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//compenent import
import AboutPage from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Components/UI/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <AboutPage />
          </Route>
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
