import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor";
import { makeStyles } from "@material-ui/core/styles";
import {
  ButtonGroup,
  Button,
  Stepper,
  Step,
  StepButton,
} from "@material-ui/core";
import { fullPage, extraResponsive } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["grid layout", "dynamic layout"];
}

function Layouts() {
  const [js, setJs] = useState(fullPage);
  const [srcDoc, setSrcDoc] = useState("");
  const [respWidth, setRespWidth] = useState("600px");
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    if (activeStep === 0) {
      setJs(fullPage);
    }
    if (activeStep === 1) {
      setJs(extraResponsive);
    }
  }, [activeStep]);

  const handleStep = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>My page</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <script src="https://unpkg.com/react@latest/umd/react.development.js" crossorigin="anonymous"></script>
          <script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js" crossorigin="anonymous"></script>
          <script src="https://unpkg.com/babel-standalone@latest/babel.min.js" crossorigin="anonymous"></script>
          <!-- Fonts to support Material Design -->
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <!-- Icons to support Material Design -->
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
          ${js}
          ReactDOM.render(
            <div align="center">
              <ExtendedButton/>
            </div>,
            document.querySelector('#root'),
          );         
          </script>
        </body>
      </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [js]);

  return (
    <div>
      <div className="pane horizontal-pane">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "620px",
          }}
        >
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setRespWidth("600px")}
            >
              Large
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setRespWidth("300px")}
            >
              Small
            </Button>
          </ButtonGroup>
          <br />
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width={respWidth}
            height="100%"
            style={{ backgroundColor: "#282c34" }}
          />
          <Stepper activeStep={activeStep} className={classes.root}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={(e) => handleStep(index)} disabled={false}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default Layouts;
