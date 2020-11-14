import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { GlobalProvider } from "../src/contexts/GlobalState";

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById("root")
);
