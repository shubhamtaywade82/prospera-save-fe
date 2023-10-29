import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import reportWebVitals from "./util/web-vitals";
import "./styles/main.scss";

// eslint-disable-next-line
const htmlRoot = document.getElementById("root") as HTMLElement;
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  process.env.REACT_APP_SCRICT_MODE === "true" ? (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);

if (process.env.REACT_APP_ENV !== "production") {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
