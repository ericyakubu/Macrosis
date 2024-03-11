import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./global.scss";

// TODO setup auth0
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider clientId="" domain="">
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
