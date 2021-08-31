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
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "30vh", marginTop: "6vh"}}>
        <NavLink to="/inventory">
          <div style={{ display:"flex", width:"25vw", height: "30vh", alignItems:"center", justifyContent: "center" }}><p>VIEW OUR INVENTORY</p></div>
        </NavLink>
        <NavLink to="/contact">
          <div style={{ display:"flex", width:"25vw", height: "30vh", alignItems:"center", justifyContent: "center", }}><p style={{ textAlign: "center"}}>LEAVE A COMMENT OR MAKE A REQUEST</p></div>
        </NavLink>
        <NavLink to="/about">
          <div style={{ display:"flex", width:"25vw", height: "30vh", alignItems:"center", justifyContent: "center" }}><p>ABOUT</p></div>
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
