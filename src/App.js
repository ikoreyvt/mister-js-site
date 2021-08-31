import Banner from "./images/Mister_Js_Logo.jpg";
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
        <NavLink to="/inventory">
          <div>VIEW OUR INVENTORY</div>
        </NavLink>
        <NavLink to="/contact">
          <div>CONTACT/MAKE A REQUEST</div>
        </NavLink>
        <NavLink to="/about">
          <div>ABOUT</div>
        </NavLink>
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
