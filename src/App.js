import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicUsage from "./sections/BasicUsage/BasicUsage";
import Layouts from "./sections/Layouts/Layouts";

const Intro = () => {
  return (
    <div className="pane horizontal-pane">
      <iframe
        src="https://codesandbox.io/s/8xxmr2r6ll"
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
            <li style={{ display: "inline" }}>
              <Link
                to={"/basic"}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#3f51b5",
                  borderRadius: "0.2rem",
                  padding: "1px",
                  marginRight: "5px",
                }}
              >
                Intro
              </Link>
            </li>
            <li style={{ display: "inline" }}>
              <Link
                to={"/layouts"}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "#3f51b5",
                  borderRadius: "0.2rem",
                  padding: "1px",
                }}
              >
                layout
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/basic" component={BasicUsage} />
          <Route exact path="/layouts" component={Layouts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
