import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Stepper, Step, StepButton } from "@material-ui/core";
import Editor from "../../components/Editor";
import { intro, theme, styling, consume, consumerForm } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
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
  return ["basic", "theming", "styling", "consume"];
}

function BasicUsage() {
  const [js, setJs] = useState(intro);
  const [consumerJs, setConsumerJs] = useState(consumerForm);
  const [srcDoc, setSrcDoc] = useState("");
  const [rightClick, setRightClick] = useState("");
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    if (activeStep === 0) {
      setJs(intro);
    }
    if (activeStep === 1) {
      setJs(theme);
    }
    if (activeStep === 2) {
      setJs(styling);
    }
    if (activeStep === 3) {
      setJs(consume);
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
          ${activeStep === 3 ? js + consumerJs : js}
          ReactDOM.render(
            <div align="center">
              ${activeStep === 3 ? "<Form/>" : "<ExtendedButton/>"}
            </div>,
            document.querySelector('#root'),
          );         
          </script>
        </body>
      </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [js, consumerJs, activeStep]);

  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log(e.srcElement.innerText);
    setRightClick(e?.srcElement?.innerText);
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div>
      <div className="pane horizontal-pane">
        {activeStep !== 3 ? (
          <Editor
            language="javascript"
            displayName="ExtendedButton"
            value={js}
            onChange={setJs}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Editor
              language="javascript"
              displayName="ExtendedButton"
              value={js}
              onChange={setJs}
            />
            <Editor
              language="javascript"
              displayName="Form"
              value={consumerJs}
              onChange={setConsumerJs}
            />
          </div>
        )}
        <div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-modals allow-scripts allow-forms allow-pointer-lock allow-same-origin"
            frameBorder="0"
            width="100%"
            height="90%"
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

        <Modal
          open={rightClick ? true : false}
          onClose={() => setRightClick("")}
        >
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
            }}
          >
            <button
              onClick={() => setRightClick("")}
              style={{
                height: "50px",
                color: "black",
                backgroundColor: "white",
                paddingBottom: "5px",
              }}
            >
              CLOSE
            </button>
            <iframe
              src={`https://material-ui.com/api/${rightClick}`}
              title="output"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default BasicUsage;
