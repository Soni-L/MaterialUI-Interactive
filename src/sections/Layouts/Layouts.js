import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor";
import { ButtonGroup, Button } from "@material-ui/core";
import { fullPage } from "./data";

function Layouts() {
  const [js, setJs] = useState(fullPage);
  const [srcDoc, setSrcDoc] = useState("");
  const [respWidth, setRespWidth] = useState("400px");

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
          }}
        >
          <ButtonGroup>
            <Button onClick={() => setRespWidth("600px")}>Large</Button>
            <Button onClick={() => setRespWidth("300px")}>Small</Button>
          </ButtonGroup>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width={respWidth}
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Layouts;
