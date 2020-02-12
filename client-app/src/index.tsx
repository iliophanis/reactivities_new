import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.min.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import ScrollToTop from "./app/layout/ScrollToTop";
//go to top of page with ScrollToTop of react router dom package

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
