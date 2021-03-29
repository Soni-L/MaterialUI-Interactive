import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BasicUsage from "./sections/BasicUsage/BasicUsage";
import Layouts from "./sections/Layouts/Layouts";
import NumericInput from "./sections/NumericInput/NumericInput";
import { Container, Typography } from "@material-ui/core";
import IntroGif from "./assets/mui-gif.gif";

const Intro = () => {
  return (
    <Container
      maxWidth="800px"
      style={{
        backgroundColor: "#282c34",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" color="secondary">
        Material UI
      </Typography>
      <br />
      <img src={IntroGif} alt="loading..." width="800px" />
    </Container>
  );
};

function App() {
  return (
    <Router>
      <div style={{ marginTop: "20px" }}>
        <nav
          style={{
            position: "fixed",
            top: "0",
            marginLeft: "0px",
            width: "100%",
          }}
        >
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
                  color: "#3f51b5",
                  borderRadius: "0.2rem",
                  padding: "1px",
                  marginRight: "10px",
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
                  color: "#3f51b5",
                  borderRadius: "0.2rem",
                  padding: "1px",
                  marginRight: "10px",
                }}
              >
                Layout
              </Link>
            </li>
            <li style={{ display: "inline" }}>
              <Link
                to={"/numeric-input-exercise"}
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "#3f51b5",
                  borderRadius: "0.2rem",
                  padding: "1px",
                }}
              >
                NumericInput-Ex
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/basic" component={BasicUsage} />
          <Route exact path="/layouts" component={Layouts} />
          <Route
            exact
            path="/numeric-input-exercise"
            component={NumericInput}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
