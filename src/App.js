import Banner from "./images/Mister_Js_Logo.jpg";
import BeerPic from "./images/beer_photo.jpg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <img
          src={Banner}
          alt="Mister J's Logo"
          title="Mister J's Logo"
          height="450"
        ></img>
      </div>
      <Router>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "30vh",
            marginTop: "6vh",
            marginBottom: "6vh",
          }}
        >
          <NavLink to="/inventory" style={{ textDecoration: "none" }}>
            <div className="home-nav-div" id="inventory-nav">
              <div className="home-nav-button">
                <p>VIEW OUR INVENTORY</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <div className="home-nav-div" id="contact-nav">
              <div className="home-nav-button">
                <p>
                  LEAVE A COMMENT OR MAKE A REQUEST
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <div className="home-nav-div" id="about-nav">
              <div className="home-nav-button">
                <p>ABOUT</p>
              </div>
            </div>
          </NavLink>
        </div>
        <Switch>
          <Route path="/inventory" />
          <Route path="/contact" />
          <Route path="/about" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
