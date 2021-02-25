import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicUsage from "./sections/BasicUsage/BasicUsage";

const Intro = () => {
  return (
    <div className="pane horizontal-pane">
      <iframe
        src="https://material-ui.com"
        title="output"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div style={{ marginTop: "20px" }}>
        <nav style={{ position: "fixed", top: "0", marginLeft: "0px" }}>
          <ul
            style={{
              margin: "0px 0px 0px 0px",
            }}
          >
            <li
              style={{
                display: "inline",
                marginRight: "5px",
                marginTop: "0px",
              }}
            >
              <Link
                to={"/"}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "#FF00FF",
                  borderRadius: "0.3rem",
                  padding: "1px",
                }}
              >
                Intro
              </Link>
            </li>
            <li style={{ display: "inline" }}>
              <Link
                to={"/basic"}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "#FF00FF",
                  borderRadius: "0.3rem",
                  padding: "1px",
                }}
              >
                Basic-Usage
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/basic" component={BasicUsage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
