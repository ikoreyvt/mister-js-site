import Banner from "./images/Mister_Js_Logo.jpg";
import BeerPic from "./images/beer_photo.jpg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Button } from "@material-ui/core";

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
            <div className="home-nav-div">
              <div className="home-nav-button">
                <p style={{ color: "white" }}>VIEW OUR INVENTORY</p>
              </div>
            </div>
          </NavLink>

          <Button variant="contained">
            <NavLink to="/contact">
              <div
                style={{
                  display: "flex",
                  width: "25vw",
                  height: "30vh",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ textAlign: "center" }}>
                  LEAVE A COMMENT OR MAKE A REQUEST
                </p>
              </div>
            </NavLink>
          </Button>

          <NavLink to="/about">
            <div
              style={{
                display: "flex",
                width: "25vw",
                height: "30vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="outlined">
                <p>ABOUT</p>
              </Button>
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
