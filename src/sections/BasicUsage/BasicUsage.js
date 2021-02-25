import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import Editor from "../../components/Editor";
import { fullPage } from "./data";

function BasicUsage() {
  const [js, setJs] = useState(fullPage);
  const [srcDoc, setSrcDoc] = useState("");
  const [rightClick, setRightClick] = useState("");

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
    <>
      <div className="pane horizontal-pane">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="50%"
          height="100%"
        />
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
              CLOSE MODAL
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
    </>
  );
}

export default BasicUsage;
